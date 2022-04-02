import React, { useState } from "react";
import { FormControl, TextField} from '@material-ui/core'
import { useAppDispatch } from '../app/hooks'
import { createMeeting } from "../pages/meetingSlice";
import { useNavigate } from 'react-router-dom';
import '../styles/button.css';
import '../styles/landingPage.css';
import * as API from "../api/api";

const CreateMeeting = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("Unnamed Meeting");

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = await API.createMeeting(name);
      const id = data.id;
      dispatch(createMeeting({ id, name }));
      navigate("/" + id);
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
                value={name === "Unnamed Meeting" ? "" : name}
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