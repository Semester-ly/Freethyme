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

function Schedule() {
  let id = useParams().id;
  let [name, setName] = useState("")

  useEffect(() => {
      axios.get("http://localhost:4000/api/calendars/"+id)
        .then(function (response) {
          console.log(response.data)
          setName(response.data.name)
        })
        .catch((error)=>{
          console.log(error);
        });
  }, [])


  return(
    
    <div className="schedule-container">
      <div className="item-header">
        <Header name={name}/> 
      </div>
      <div className="item-calendar">
        <Calendar />
      </div>
      <div className="item-list">
        <MemberList members={[
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
          ]}/>
      </div>
    

      <div className="container-footer"/>
      
    </div>
    
  );
}

export default Schedule;