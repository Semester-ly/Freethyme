import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import type { MemberType } from '../components/Member'

interface MeetingState {
  id: number
  name: string
  members: MemberType[]
  curMemberName: string
  curMemberId: number,
  curMemberSlots: string[],
  selectedMembers: number[],
}

const initialState: MeetingState = {
  id: NaN,
  name: "",
  members: [],
  curMemberName: "",
  curMemberId: NaN,
  curMemberSlots: [],
  selectedMembers: [],
}

export const meetingSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    createMeeting: (state, action)=>{
      state.id = action.payload["id"];
      state.name = action.payload["name"];
    },
    updateMeetingId: (state, action: PayloadAction<number>)=>{
      state.id = action.payload;
    },
    updateMeetingName: (state, action: PayloadAction<string>)=>{
      state.name = action.payload;
    },
    updateMembers: (state, action: PayloadAction<MemberType[]>)=>{
      state.members = [...action.payload];
    },
    addMember: (state, action: PayloadAction<MemberType>)=>{
      state.members = [action.payload, ...state.members];
    },
    removeMember: (state, action: PayloadAction<number>)=>{
      state.members = [...state.members.filter(member => member.id !== action.payload)];
      state.selectedMembers = [...state.selectedMembers.filter(memberId => memberId !== action.payload)]
    },
    setCurMemberName: (state, action: PayloadAction<string>)=>{
      state.curMemberName = action.payload;
    },
    setCurMemberId: (state, action: PayloadAction<number>)=>{
      state.curMemberId = action.payload;
    },
    setCurMemberSlots: (state, action: PayloadAction<string[]>)=>{ // date string
      state.curMemberSlots = action.payload;
    },
    // store member id's 
    selectMembers: (state, action: PayloadAction<number[]> )=>{ // for display chosen members' times
      state.selectedMembers = action.payload;
    }
  }
})

export const { createMeeting, 
  updateMeetingId, 
  updateMeetingName, 
  updateMembers, 
  addMember,
  removeMember, 
  setCurMemberName, 
  setCurMemberId,
  setCurMemberSlots,
  selectMembers } = meetingSlice.actions;

export const selectMeetingName = (state: RootState) => state.meeting.name
export default meetingSlice.reducer
