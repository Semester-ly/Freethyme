// figma second & third pages
// where users create/edit the schedule

import Calendar from '../components/Calendar';
import Header from '../components/Header';
import MemberList from '../components/MemberList';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

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
    <>
      {<Header name={name}/> }
      {/* <Calendar /> */}
      <MemberList members={[
        {id:1, name:"rosa", TimeSlot: undefined},
        {id:2, name:"kiron", TimeSlot: undefined},
        {id:3, name:"james", TimeSlot: undefined},
        {id:4, name:"sebastian", TimeSlot: undefined},
        {id:5, name:"alex", TimeSlot: undefined},
        ]}/>
    </>
  );
}

export default Schedule;