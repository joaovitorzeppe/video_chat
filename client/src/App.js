import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

const style = {
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',
    },
    image: {
        marginLeft: '15px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
}

function App() {
  return (
    <div style={style.wrapper}>
        <AppBar position="static" color="inherit" style={style.appBar}>
            <Typography variant="h2" align="center">Video Chat</Typography>
        </AppBar>
        <VideoPlayer />
        <Options>
            <Notifications />
        </Options>
    </div>
  );
}

export default App;
