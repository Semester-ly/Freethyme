import Calendar from '../components/Calendar';
import Header from '../components/Header';
import MemberList from '../components/MemberList';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';
import '../styles/meeting.css';
import { updateId, updateMembers, updateName } from './meetingSlice';
import { useAppDispatch } from '../app/hooks';


function Schedule() {
  const dispatch = useAppDispatch();
  // meeting id
  let id = useParams().id;

  useEffect(() => {
      axios.get("http://localhost:4000/api/calendars/" + id)
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

export default Schedule;