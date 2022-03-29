// figma second & third pages
// where users create/edit the schedule

import Calendar from '../components/Calendar';
import Header from '../components/Header';
import MemberList from '../components/MemberList';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/schedule.css';
import { updateId, updateMembers, updateName } from './meetingSlice';
import { useAppDispatch } from '../app/hooks';
function Schedule() {
  const dispatch = useAppDispatch();
  // meeting id
  let id = useParams().id;

  useEffect(() => {
      axios.get("http://localhost:4000/api/calendars/"+id)
        .then(function (response) {
          console.log(response.data);
          dispatch(updateId(response.data.id));
          dispatch(updateName(response.data.name));
          dispatch(updateMembers(response.data.members));
        })
        .catch((error)=>{
          console.log(error);
        });
  }, [])


  return(
    
    <div className="schedule-container">
      <div className="item-header">
        <Header/> 
      </div>
      <div className="item-calendar">
        <Calendar />
      </div>
      <div className="item-list">
      <MemberList/>
        {/* <MemberList members={[
          {id:1, name:"rosa", TimeSlot: undefined},
          {id:2, name:"kiron", TimeSlot: undefined},
          {id:3, name:"james", TimeSlot: undefined},
          {id:4, name:"sebastian", TimeSlot: undefined},
          {id:5, name:"alex", TimeSlot: undefined},
          {id:6, name:"alex", TimeSlot: undefined},
          {id:7, name:"alex", TimeSlot: undefined},
          {id:8, name:"alex", TimeSlot: undefined},
          {id:9, name:"alex", TimeSlot: undefined},
          {id:10, name:"alex", TimeSlot: undefined},
          {id:11, name:"alex", TimeSlot: undefined},
          {id:12, name:"alex", TimeSlot: undefined},
          {id:13, name:"alex", TimeSlot: undefined},
          {id:14, name:"alex", TimeSlot: undefined},
          ]}/> */}
      </div>
    

      <div className="container-footer"/>
      
    </div>
    
  );
}

export default Schedule;