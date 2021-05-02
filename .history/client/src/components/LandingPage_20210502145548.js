import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import "./LandingPage.css";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
    },
    },
}));

export default function LandingPage() {
    const [ name, setName ] = useState("");

    return (
        <>
        <h3>Enter Your Name to Join the Chat Room</h3>
        <form className="textFieldBox">
            <TextField 
                className={classes.text}
                name="name" 
                value={name}
                label="Name" 
                variant="outlined"
            />
            <button className="btn">Join</button>
        </form>
        </>
    )
}
