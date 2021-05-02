import React from 'react';
import { TextField } from '@material-ui/core';
import "./LandingPage.css";

export default function LandingPage() {
    return (
        <form className="textFieldBox">
        <TextField 
            name="name" 
            value={} 
            label="Name" />
        </form>
    )
}
