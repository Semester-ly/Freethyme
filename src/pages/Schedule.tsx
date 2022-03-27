// figma second & third pages
// where users create/edit the schedule

import Calendar from '../components/Calendar';
import Participants from '../components/Participants';
import Header from '../components/Header';
import ParticipantList from '../components/ParticipantList';

function Schedule() {
  return(
    <>
      {/* <Header name={"userName"}/> */}
      {/* <Calendar /> */}
      <ParticipantList />
    </>
  );
}

export default Schedule;