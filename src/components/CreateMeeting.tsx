import React from "react"
import { useState } from "react";
import { Grid, FormControl, TextField} from '@material-ui/core'
import { useAppDispatch } from '../app/hooks'
import { createMeeting } from "../pages/meetingNameSlice";
import { useNavigate } from 'react-router-dom'
import '../styles/button.css'

const CreateMeeting = (props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createMeeting(name))
        navigate("/create")
      };

    // Update name every time user changes text in text field
    const updateName = (event) => {
        setName(event.target.value);
      };

    return (
        <>
        <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}>
            
        <form>
        <FormControl fullWidth>
          <TextField
            placeholder="Name the Meeting:"
            aria-label="Name the Meeting:"
            value={name}
            onChange={updateName}
          />
        </FormControl>
        <button type="submit" className="btn btn--add btn__text" onClick={handleSubmit}>
            Create
        </button>
      </form>

        </Grid>
        
        </>
        
    )
}

export default CreateMeeting;