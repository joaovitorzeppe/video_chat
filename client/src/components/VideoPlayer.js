import React, {useContext} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import {SocketContext} from "../SocketContext";

const style = {
    video: {
        width: window.innerWidth < 680 ? '300px' : '550px',
    },
    gridContainer: {
        justifyContent: 'center',
        flexDirection: window.innerWidth < 680 ? 'column' : 'row',
    },
    paper: {
        padding: '10px',
        border: '2px solid black',
        margin: '10px',
    },
}

const VideoPlayer = () => {
    const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext)
    return (
        <Grid container style={style.gridContainer}>

            {/* Nosso video */}
            {stream &&
                <Paper style={style.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>{name || 'Nome'}</Typography>
                        <video playsInline muted ref={myVideo} autoPlay style={style.video}/>
                    </Grid>
                </Paper>
            }

            {/* Video do usuário */}
            {callAccepted && !callEnded &&
                <Paper style={style.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>{call.name || 'Nome'}</Typography>
                        <video playsInline ref={userVideo} autoPlay style={style.video}/>
                    </Grid>
                </Paper>
            }
        </Grid>
    );
};

export default VideoPlayer;
