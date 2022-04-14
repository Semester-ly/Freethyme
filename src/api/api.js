import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

async function createMeeting(meetingName) {
  try {
    const response = await axiosInstance.post(`/api/calendars`, {name: meetingName});
    return response.data;
    // {
    //   "id": integer,
    //   "name": string,
    //   "members": []
    // }
  } catch(err) {
    console.log(err);
  }
}

async function getMeeting(meetingId) {
  try{
    const response = await axiosInstance.get(`/api/calendars/${meetingId}`);
    return response.data;
    // {
    //   "id": integer, (meetingId)
    //   "name": string,
    //   "members": list[Member]
    // }
  } catch(err){
    console.log(err)
  }
}

async function renameMeeting(meetingId, newName) {
  try{
    const response = await axiosInstance.patch(`/api/calendars/${meetingId}`, {name:newName});
    return response.data;
    // {
    //   "id": integer, (meetingId)
    //   "name": string,
    //   "members": list[Member]
    // }
  } catch(err){
    console.log(err)
  }
}

async function addNewMember(meetingId, memberName) {
  try {
    const response = await axiosInstance.post(`/api/calendars/${meetingId}/members/`, {name: memberName});
    return response.data;
    // {
    //   "id": integer, 
    //   "name": string,
    //   "timeSlots": []
    // }
  } catch(err) {
    console.log(err);
  }
}

async function setAvail(meetingId, memberId, timeSlots) {
  try {
    const response = await axiosInstance.put(`/api/calendars/${meetingId}/members/${memberId}`, { timeSlots });
    return response.data;
    // {
    //   "id": integer
    //   "name": string
    //   "timeSlots": list[TimeSlot]
    // }
  } catch(err) {
    console.log(err);
  }
}

// don't use, member name unique
async function renameMember(meetingId, memberId, newName) {
  try{
    const response = await axiosInstance.patch(`/api/calendars/${meetingId}/members/${memberId}`, {name:newName});
    return response.data;
    // {
    //   "id": integer,
    //   "name": string,
    //   "timeSlots": list[TimeSlot]
    // }
  } catch(err){
    console.log(err)
  }
}


async function removeMember(meetingId, memberId) {
  try{
    await axiosInstance.delete(`/api/calendars/${meetingId}/members/${memberId}`);
  } catch(err) {
    console.log(err);
  }

}

export { createMeeting, getMeeting, removeMember, renameMeeting, renameMember, addNewMember, setAvail };

