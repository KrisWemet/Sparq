import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Award, ChevronRight, Plus, Bell } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface Question {
  id: number;
  text: string;
  options?: string[];
  category: string;
  timeSlot: "AM" | "PM";
  dayOfWeek: "MON" | "TUE" | "WED" | "THU" | "FRI";
  intimacyLevel: 1 | 2 | 3 | 4 | 5; // 1 = easiest, 5 = most intimate
}

interface WeekendActivity {
  id: number;
  title: string;
  description: string;
  category: string;
}

const weekdayQuestions: Question[] = [
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

const weekendActivities: WeekendActivity[] = [
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

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [customAnswer, setCustomAnswer] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [isWeekend, setIsWeekend] = useState(false);

  useEffect(() => {
    const now = new Date();
    const isWeekendDay = now.getDay() === 0 || now.getDay() === 6;
    const hour = now.getHours();
    const isAM = hour >= 5 && hour < 12;
    const dayMap: { [key: number]: "MON" | "TUE" | "WED" | "THU" | "FRI" } = {
      1: "MON",
      2: "TUE",
      3: "WED",
      4: "THU",
      5: "FRI"
    };

    setIsWeekend(isWeekendDay);
    
    if (!isWeekendDay) {
      const currentDayOfWeek = dayMap[now.getDay()];
      const timeSlot = isAM ? "AM" : "PM";
      const availableQuestion = weekdayQuestions.find(
        q => q.dayOfWeek === currentDayOfWeek && q.timeSlot === timeSlot
      );
      setCurrentQuestion(availableQuestion || null);
    }
  }, []);

  const handleAnswer = (answer: string) => {
    if (answer === "other") {
      setShowCustomInput(true);
      return;
    }

    if (currentQuestion) {
      const newAnswers = { ...selectedAnswers };
      newAnswers[currentQuestion.id] = answer;
      setSelectedAnswers(newAnswers);
      setShowCustomInput(false);
      setCustomAnswer("");
      setIsCompleted(true);
      
      // Simulate partner notification
      toast.info("Your partner has been notified about your answer!", {
        duration: 3000
      });
    }
  };

  const handleCustomAnswer = () => {
    if (customAnswer.trim() && currentQuestion) {
      handleAnswer(customAnswer.trim());
    }
  };

  const handleNudgePartner = () => {
    toast.info("Reminder sent to your partner!", {
      duration: 3000
    });
  };

  if (isWeekend) {
    return (
      <div className="min-h-screen bg-gray-50 pb-24">
        <main className="container max-w-lg mx-auto px-4 pt-8 animate-slide-up">
          <header className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Award className="text-primary w-6 h-6" />
              <h1 className="text-xl font-semibold text-gray-900">
                Weekend Activities
              </h1>
            </div>
          </header>

          <div className="space-y-4">
            {weekendActivities.map(activity => (
              <div key={activity.id} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <Button className="w-full">Plan This Activity</Button>
              </div>
            ))}
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-50 pb-24">
        <main className="container max-w-lg mx-auto px-4 pt-8 animate-slide-up">
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              No Question Available
            </h2>
            <p className="text-gray-600">
              Check back later for your next relationship question!
            </p>
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <main className="container max-w-lg mx-auto px-4 pt-8 animate-slide-up">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Award className="text-primary w-6 h-6" />
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Daily Quiz
              </h1>
              <p className="text-sm text-gray-500">{currentQuestion.category}</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNudgePartner}
            className="shrink-0"
          >
            <Bell className="h-4 w-4" />
          </Button>
        </header>

        {!isCompleted ? (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-medium text-gray-900 mb-6">
                {currentQuestion.text}
              </h2>
              <div className="space-y-3">
                {currentQuestion.options?.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-between text-left font-normal hover:text-primary hover:border-primary"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                ))}
                <Button
                  variant="outline"
                  className="w-full justify-between text-left font-normal hover:text-primary hover:border-primary"
                  onClick={() => handleAnswer("other")}
                >
                  Something else...
                  <Plus className="w-4 h-4" />
                </Button>

                {showCustomInput && (
                  <div className="mt-4 space-y-3">
                    <Input
                      placeholder="Tell us your answer..."
                      value={customAnswer}
                      onChange={(e) => setCustomAnswer(e.target.value)}
                      className="w-full"
                    />
                    <Button 
                      className="w-full"
                      onClick={handleCustomAnswer}
                      disabled={!customAnswer.trim()}
                    >
                      Submit Your Answer
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center space-y-4">
            <Award className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Thanks for sharing!
            </h2>
            <p className="text-gray-600">
              We'll notify you when your partner responds.
            </p>
            <Button 
              className="w-full" 
              onClick={() => console.log("View results", selectedAnswers)}
            >
              See Results
            </Button>
          </div>
        )}
      </main>
      <BottomNav />
    </div>
  );
}
