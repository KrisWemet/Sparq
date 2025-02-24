
export interface Question {
  id: number;
  text: string;
  options?: string[];
  category: string;
  timeSlot: "AM" | "PM";
  dayOfWeek: "MON" | "TUE" | "WED" | "THU" | "FRI";
  intimacyLevel: 1 | 2 | 3 | 4 | 5;
  modality: PsychologyModality;
  explanation?: string;
}

export interface WeekendActivity {
  id: number;
  title: string;
  description: string;
  category: string;
  modality: PsychologyModality;
  explanation?: string;
}

export type PsychologyModality = 
  | "Influence & Persuasion"
  | "Positive Psychology"
  | "CBT"
  | "Motivational Interviewing"
  | "Narrative Therapy"
  | "Love Languages"
  | "Mindfulness"
  | "Nonviolent Communication"
  | "Imago Therapy"
  | "Gottman Method"
  | "Emotional Focused Therapy"
  | "Attachment Theory";

