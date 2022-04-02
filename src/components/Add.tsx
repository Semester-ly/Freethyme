import axios from "axios";
import { addMember } from "../pages/meetingSlice";
import { useAppDispatch } from "../app/hooks";
import { useAppSelector } from "../app/hooks";
import { useState } from "react";
import { TextField } from '@material-ui/core';

const Add = () => {
    const dispatch = useAppDispatch();
    const [memberName, setMemberName] = useState("");
    const meetingId = useAppSelector(state => state.meeting.id)
    
    const updateMemberName = (event) => {
        setMemberName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:4000//api/calendars/${meetingId}/members/`, { "name": memberName })
        .then((response)=>{
          dispatch(addMember({ id: response.data.id, name: response.data.name, timeSlots: response.data.timeSlots }));
        })
        .catch((error)=>{
          console.log(error);
        });
      };

    return (
        <div className = "row">    
            <div className="col" style={{padding: "40px"}}>
                <TextField 
                    placeholder="New member name"
                    value={memberName}
                    onChange={updateMemberName}
                />
            </div>
            <div className="col">
                <button 
                    type="submit" 
                    className="btn btn--add btn__text"
                    onClick={handleSubmit}
                    >
                    Add
                </button>
            </div>
        </div>
    )
}

export default Add;
