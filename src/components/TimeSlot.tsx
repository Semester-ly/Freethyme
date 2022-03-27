function TimeSlot() {

}


export interface TimeSlotType {
  id: number;
  memberId: number;
  day: string;
  timeStart: string;
  timeEnd: string;
}

export default TimeSlot;