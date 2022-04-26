import Calendar from '../components/Calendar';
import Header from '../components/Header';
import MemberList from '../components/MemberList';
import Available from "../components/Available";
import * as API from "../api/api";
import { useEffect } from "react";
import '../styles/meeting.css';
import { updateMeetingId, updateMembers, updateMeetingName } from './meetingSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useParams } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';


function Meeting() {
  let id = useParams().id as string;
  const dispatch = useAppDispatch();
  dispatch(updateMeetingId(parseInt(id)))
  let meetingId = useAppSelector(state=>state.meeting.id);


  useEffect(() => {
    const loadData = async () =>{
      const data = await API.getMeeting(meetingId);
      dispatch(updateMeetingId(data.id));
      dispatch(updateMeetingName(data.name));
      dispatch(updateMembers(data.members));
    }
    if (meetingId) {
      loadData().catch(err=>console.log(err));
    }

  }, [meetingId, dispatch]);


  return(
    
    
    <>

      <Box m={4}>
        <Grid container >
            <Header/> 
        </Grid>
      </Box>
   

      <Box m={4}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Calendar />
          </Grid>
          <Grid item>
            <MemberList/>
          </Grid>
        </Grid>
      </Box>

      <Box m={4}>
        <Grid container >
          <Available/>
        </Grid>
      </Box>

    </>

    
    
  );
}

export default Meeting;