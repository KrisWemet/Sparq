
export interface Question {
  id: number;
  text: string;
  options?: string[];
  category: string;
  timeSlot: "AM" | "PM";
  dayOfWeek: "MON" | "TUE" | "WED" | "THU" | "FRI";
  intimacyLevel: 1 | 2 | 3 | 4 | 5;
}

export interface WeekendActivity {
  id: number;
  title: string;
  description: string;
  category: string;
}
