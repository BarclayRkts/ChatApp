import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import "./LandingPage.css";

export default function LandingPage() {
    const [ name, setName ] = useState("");

    return (
        <form className="textFieldBox">
        <TextField 
            name="name" 
            value={name}
            label="Name" />
        </form>
    )
}
