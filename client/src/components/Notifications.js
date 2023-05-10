import React, {useContext} from 'react';
import Button from '@mui/material/Button';

import {SocketContext} from "../SocketContext";

const Notifications = () => {
    const {answerCall, call, callAccepted} = useContext(SocketContext);
    return (
        <>
            {call.isReceivedCall && !callAccepted &&
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1>{call.name} está chamando: </h1>
                    <Button variant="contained" color="primary" onClick={answerCall}>
                        Atender
                    </Button>
                </div>
            }
        </>
    );
};

export default Notifications;
