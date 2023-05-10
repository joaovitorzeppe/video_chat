import React, {useContext, useState} from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Assignment, Phone, PhoneDisabled} from '@mui/icons-material';

import {SocketContext} from "../SocketContext";

const style = {
    oot: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridContainer: {
        width: '100%',
        flexDirection: window.innerWidth < 680 ? 'column' : 'row',
    },
    container: {
        width: window.innerWidth < 680 ? '80%' : '600px',
        margin: '35px 0',
        padding: 0,
    },
    margin: {
        marginTop: 20,
    },
    padding: {
        padding: 20,
    },
    paper: {
        padding: '10px 20px',
        border: '2px solid black',
    },
}

const Options = ({children}) => {
    const {me, callAccepted, name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <Container style={style.container}>
            <Paper elevation={10} style={style.paper}>
                <form style={style.root} noValidate autoComplete="off">
                    <Grid container style={style.gridContainer}>
                        <Grid item xs={12} md={6} style={style.padding}>
                            <Typography gutterBottom variant="h6">Sua Conta</Typography>
                            <TextField label="Nome" value={name} onChange={(e) => setName(e.target.value)} fullWidth/>
                            <CopyToClipboard text={me} style={style.margin}>
                                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large"/>}>
                                    Copiar seu ID
                                </Button>
                            </CopyToClipboard>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
            Options
            {children}
        </Container>
    );
};

export default Options;
