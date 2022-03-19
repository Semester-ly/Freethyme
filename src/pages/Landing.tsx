import React from "react";
import { FormControl, IconButton, Input, Paper } from '@material-ui/core';
import { Add } from "@material-ui/icons";
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { createMeeting } from './meetingNameSlice'

function Landing(){
  const meetingName = useAppSelector(state=> state.meetingName.meetingName);
  console.log(meetingName);
  const dispatch = useAppDispatch();


  return(
    <>
      <Paper elevation={3}>
        <FormControl fullWidth>
          <Input
            id="meetingName"
            placeholder="Name the Meeting:"
            onChange={(event)=>dispatch(createMeeting(event.target.value))}
          />
        </FormControl>
      </Paper>
      <IconButton id="createMeeting">
        <Add />
      </IconButton>
    </>

  )
}

export default Landing;

