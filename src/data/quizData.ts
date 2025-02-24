
import { Question, WeekendActivity } from "@/types/quiz";

export const weekdayQuestions: Question[] = [
  // Level 1 - Light & Playful
  {
    id: 1,
    category: "Physical Connection",
    text: "What's a tiny touch (like brushing hands) that makes your heart feel lighter?",
    timeSlot: "AM",
    dayOfWeek: "MON",
    intimacyLevel: 1,
    modality: "Love Languages",
    explanation: "Based on Physical Touch love language, focusing on small but meaningful gestures"
  },
  {
    id: 2,
    category: "Communication",
    text: "What's a moment when your partner's words made you feel truly understood?",
    timeSlot: "PM",
    dayOfWeek: "MON",
    intimacyLevel: 1,
    modality: "Nonviolent Communication",
    explanation: "Emphasizes empathetic listening and expression of feelings"
  },
  
  // Level 2 - Building Trust
  {
    id: 3,
    category: "Emotional Connection",
    text: "What's a pattern from your past relationships that you notice showing up in our relationship?",
    timeSlot: "AM",
    dayOfWeek: "TUE",
    intimacyLevel: 2,
    modality: "Attachment Theory",
    explanation: "Explores how past relationships influence current attachment patterns"
  },
  {
    id: 4,
    category: "Trust & Vulnerability",
    text: "When do you feel most securely attached to me?",
    timeSlot: "PM",
    dayOfWeek: "TUE",
    intimacyLevel: 2,
    modality: "Emotional Focused Therapy",
    explanation: "Focuses on emotional bonds and attachment needs"
  },

  // Level 3 - Deeper Connection
  {
    id: 5,
    category: "Emotional Intimacy",
    text: "What story about us do you love retelling to others?",
    timeSlot: "AM",
    dayOfWeek: "WED",
    intimacyLevel: 3,
    modality: "Narrative Therapy",
    explanation: "Uses storytelling to understand relationship dynamics"
  },
  {
    id: 6,
    category: "Trust & Support",
    text: "What's a thought pattern about our relationship you'd like to reframe?",
    timeSlot: "PM",
    dayOfWeek: "WED",
    intimacyLevel: 3,
    modality: "CBT",
    explanation: "Identifies and reshapes thought patterns affecting the relationship"
  },

  // Level 4 - Vulnerability
  {
    id: 7,
    category: "Boundaries & Trust",
    text: "What's one way we could turn towards each other more in daily moments?",
    timeSlot: "AM",
    dayOfWeek: "THU",
    intimacyLevel: 4,
    modality: "Gottman Method",
    explanation: "Based on turning towards bids for connection"
  },
  {
    id: 8,
    category: "Physical & Emotional",
    text: "What strengths do you see in our relationship that we can build on?",
    timeSlot: "PM",
    dayOfWeek: "THU",
    intimacyLevel: 4,
    modality: "Positive Psychology",
    explanation: "Focuses on strengths and positive aspects of the relationship"
  },

  // Level 5 - Deep Intimacy
  {
    id: 9,
    category: "Sacred Connection",
    text: "How can we create a deeper sense of safety in our most vulnerable moments?",
    timeSlot: "AM",
    dayOfWeek: "FRI",
    intimacyLevel: 5,
    modality: "Imago Therapy",
    explanation: "Creates safe space for deep emotional connection"
  },
  {
    id: 10,
    category: "Lasting Bond",
    text: "What's one change you'd like to make in our relationship, and how can we work towards it together?",
    timeSlot: "PM",
    dayOfWeek: "FRI",
    intimacyLevel: 5,
    modality: "Motivational Interviewing",
    explanation: "Explores motivation and commitment to relationship growth"
  }
];

export const weekendActivities: WeekendActivity[] = [
  {
    id: 1,
    title: "Mindful Connection Practice",
    description: "Create a dedicated space and time for mindful presence with each other. Take turns sharing what you notice in the present moment about your partner.",
    category: "Physical & Emotional Connection",
    modality: "Mindfulness",
    explanation: "Uses mindfulness techniques to deepen present-moment awareness and connection"
  },
  {
    id: 2,
    title: "Reciprocity Building",
    description: "Each partner takes turns sharing a small request that would make them feel more loved, using the principle of fair exchange.",
    category: "Physical Connection",
    modality: "Influence & Persuasion",
    explanation: "Based on Cialdini's principle of reciprocity to strengthen relationship bonds"
  }
];

