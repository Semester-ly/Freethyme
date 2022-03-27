// figma second & third pages
// where users create/edit the schedule

import Calendar from '../components/Calendar';
import Header from '../components/Header';
import MemberList from '../components/MemberList';

function Schedule() {
  return(
    <>
      <Header name={"userName"}/>
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