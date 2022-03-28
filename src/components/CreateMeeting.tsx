import React, { useState } from "react";
import { Grid, FormControl, TextField} from '@material-ui/core'
import { useAppDispatch } from '../app/hooks'
import { createMeeting } from "../pages/meetingSlice";
import { useNavigate } from 'react-router-dom';
import '../styles/button.css';
import '../styles/landingPage.css';
import axios from 'axios';

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
          navigate("/create");
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
      <>
        <div className="flexbox-container">
        <div className="flexbox-item-1">
            <FormControl fullWidth>
              <TextField 
                placeholder="Name the Meeting:"
                aria-label="Name the Meeting:"
                value={name}
                onChange={updateName}
              />
            </FormControl>
        </div>
        <div className="flexbox-item-2">
          <button 
            type="submit" 
            className="btn btn--create btn__text" 
            onClick={handleSubmit}>
            Create
          </button>
        </div>
        </div>
      </>
      
    )
}

export default CreateMeeting;