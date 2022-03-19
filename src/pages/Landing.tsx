import { FormControl, IconButton, Input, Paper } from '@material-ui/core';
import { Add } from "@material-ui/icons";
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { createMeeting } from './meetingNameSlice'
import { useNavigate } from 'react-router-dom'

function Landing(){
  const meetingName = useAppSelector(state=> state.meetingName.meetingName);
  console.log(meetingName);
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
      <IconButton className="addSchedule" onClick={() => navigate("/create")}>
        <Add />
      </IconButton>
    </>

  )
}

export default Landing;

