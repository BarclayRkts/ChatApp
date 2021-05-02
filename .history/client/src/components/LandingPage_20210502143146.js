import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import "./LandingPage.css";

export default function LandingPage() {
    return (
        <form className="textFieldBox">
        <TextField 
            name="name" 
            value="add name value from state"
            label="Name" />
        </form>
    )
}
