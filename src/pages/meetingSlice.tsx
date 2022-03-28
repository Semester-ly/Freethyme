import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import type { MemberType } from '../components/Member'

interface MeetingState {
  id: number
  name: string
  members: MemberType[]
}

const initialState: MeetingState = {
  id: NaN,
  name: "",
  members: []
}

export const meetingSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    createMeeting: (state, action: PayloadAction<Object>)=>{
      state.id = action.payload["id"];
      state.name = action.payload["name"];
      console.log(`Meeting created with id: ${state.id}, name: ${state.name}`);
    }
  }
})

export const { createMeeting } = meetingSlice.actions;
export const selectMeetingName = (state: RootState) => state.meeting.name
export default meetingSlice.reducer
