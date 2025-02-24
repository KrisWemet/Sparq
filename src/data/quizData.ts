import { Question, WeekendActivity } from "@/types/quiz";

export const weekdayQuestions: Question[] = [
  // Level 1 - Light & Playful
  {
    id: 1,
    category: "Physical Connection",
    text: "What's a tiny touch (like brushing hands) that makes your heart feel lighter?",
    timeSlot: "AM",
    dayOfWeek: "MON",
    intimacyLevel: 1
  },
  {
    id: 2,
    category: "Communication",
    text: "What's a silly nickname for a body part that always makes you smile?",
    timeSlot: "PM",
    dayOfWeek: "MON",
    intimacyLevel: 1
  },
  
  // Level 2 - Building Trust
  {
    id: 3,
    category: "Emotional Connection",
    text: "What's a non-sexual touch (like head scratches) that feels like home to you?",
    timeSlot: "AM",
    dayOfWeek: "TUE",
    intimacyLevel: 2
  },
  {
    id: 4,
    category: "Trust & Vulnerability",
    text: "What's a time my touch calmed a storm inside you without words?",
    timeSlot: "PM",
    dayOfWeek: "TUE",
    intimacyLevel: 2
  },

  // Level 3 - Deeper Connection
  {
    id: 5,
    category: "Emotional Intimacy",
    text: "What's a fear you've overcome to let me see you fully?",
    timeSlot: "AM",
    dayOfWeek: "WED",
    intimacyLevel: 3
  },
  {
    id: 6,
    category: "Trust & Support",
    text: "What's a silent promise you've made to protect our intimacy?",
    timeSlot: "PM",
    dayOfWeek: "WED",
    intimacyLevel: 3
  },

  // Level 4 - Vulnerability
  {
    id: 7,
    category: "Boundaries & Trust",
    text: "What's a boundary you're scared to set but know you need to?",
    timeSlot: "AM",
    dayOfWeek: "THU",
    intimacyLevel: 4
  },
  {
    id: 8,
    category: "Physical & Emotional",
    text: "What's a way I've touched you that rewired your idea of safety?",
    timeSlot: "PM",
    dayOfWeek: "THU",
    intimacyLevel: 4
  },

  // Level 5 - Deep Intimacy
  {
    id: 9,
    category: "Sacred Connection",
    text: "What's a part of our physical connection that feels sacred beyond explanation?",
    timeSlot: "AM",
    dayOfWeek: "FRI",
    intimacyLevel: 5
  },
  {
    id: 10,
    category: "Lasting Bond",
    text: "What's a piece of forever you've found in the way we fit together?",
    timeSlot: "PM",
    dayOfWeek: "FRI",
    intimacyLevel: 5
  }
];

export const weekendActivities: WeekendActivity[] = [
  {
    id: 1,
    title: "Sacred Space Creation",
    description: "Create a physical space together that feels safe and intimate. Share what elements make it special for each of you.",
    category: "Physical & Emotional Connection"
  },
  {
    id: 2,
    title: "Touch Language Exploration",
    description: "Develop your own private language of touches - create meanings for different gestures that only you two understand.",
    category: "Physical Connection"
  }
];
