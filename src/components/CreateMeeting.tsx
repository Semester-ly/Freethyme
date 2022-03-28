import React, { useState, useEffect } from "react";
import { Grid, FormControl, TextField} from '@material-ui/core'
import { useAppDispatch } from '../app/hooks'
import { createMeeting } from "../pages/meetingSlice";
import { useNavigate } from 'react-router-dom'
import '../styles/button.css'
import axios from 'axios'

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const CreateMeeting = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      let id: number;
      axios.post("http://localhost:4000/api/calendars/", { name })
        .then((response)=>{
          id = response.data.id;
          dispatch(createMeeting({ id, name }));
          navigate("/" + id);
        })
        .catch((error)=>{
          console.log(error);
        });
    };

    // Update name every time user changes text in text field
    const updateName = (event) => {
        setName(event.target.value);
    };

    return (
      <Grid container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh"}}>
        <FormControl>
          <TextField fullWidth
            margin="dense"
            style={styles}
            placeholder="Name the Meeting:"
            aria-label="Name the Meeting:"
            value={name}
            onChange={updateName}
          />
          </FormControl>
          <button 
            type="submit" 
            className="btn btn--add btn__text" 
            onClick={handleSubmit}>
            Create
          </button>
      </Grid> 
    )
}

export default CreateMeeting;