import Calendar from '../components/Calendar';
import Header from '../components/Header';
import MemberList from '../components/MemberList';
import * as API from "../api/api";
import { useEffect } from "react";
import '../styles/meeting.css';
import { updateMeetingId, updateMembers, updateMeetingName } from './meetingSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';


function Meeting(props) {
  const dispatch = useAppDispatch();
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
    
    <div className="meeting-container">
      <div className="item-header">
        <Header/> 
      </div>
      <div className="item-calendar">
        <Calendar />
      </div>
      <div className="item-list">
        <MemberList/>
      </div>
    

      <div className="container-footer"/>
      
    </div>
    
  );
}

export default Meeting;