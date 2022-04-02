import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
interface MeetingNameState {
  id: number
  meetingName: string
}

const initialState: MeetingNameState = {
  id: NaN,
  meetingName: ""
}

export const meetingNameSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    createMeeting: (state, action: PayloadAction<Object>)=>{
      state.id = action.payload["id"];
      state.meetingName = action.payload["name"];
      console.log(state.id, state.meetingName);
    }
  }
})

export const { createMeeting } = meetingNameSlice.actions;
export const selectMeetingName = (state: RootState) => state.meetingName.meetingName
export default meetingNameSlice.reducer
