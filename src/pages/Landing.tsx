import { FormControl, IconButton, Input, Paper } from '@material-ui/core';
import { Add } from "@material-ui/icons";
import { useAppDispatch } from '../app/hooks'
import { createMeeting } from './meetingNameSlice'
import { useNavigate } from 'react-router-dom'

function Landing(){
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return(
    <>
      <Paper elevation={3}>
        <FormControl fullWidth>
          <Input
            className="meetingName"
            placeholder="Name the Meeting:"
            onChange={(event)=>dispatch(createMeeting(event.target.value))}
          />
        </FormControl>
      </Paper>
      <button className="btn btn--add" onClick={() => navigate("/create")}>
        <span className="btn__text">Create</span>
      </button>
    </>

  )
}

export default Landing;

