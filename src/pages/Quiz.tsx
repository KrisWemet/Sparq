
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Award, ChevronRight } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";

interface Question {
  id: number;
  text: string;
  options: string[];
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    text: "What is your partner's favorite way to unwind after a long day?",
    options: [
      "Reading a book",
      "Watching TV/movies",
      "Taking a walk",
      "Having a quiet conversation"
    ]
  },
  {
    id: 2,
    text: "How does your partner prefer to receive affection?",
    options: [
      "Physical touch",
      "Words of affirmation",
      "Acts of service",
      "Quality time"
    ]
  },
  {
    id: 3,
    text: "What's your partner's ideal weekend activity?",
    options: [
      "Outdoor adventures",
      "Relaxing at home",
      "Social gatherings",
      "Cultural activities"
    ]
  }
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = sampleQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / sampleQuestions.length) * 100;

  const handleAnswer = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);

    if (currentQuestionIndex < sampleQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <main className="container max-w-lg mx-auto px-4 pt-8 animate-slide-up">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Award className="text-primary w-6 h-6" />
            <h1 className="text-xl font-semibold text-gray-900">
              Daily Quiz
            </h1>
          </div>
          <div className="text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {sampleQuestions.length}
          </div>
        </header>

        <Progress value={progress} className="mb-8" />

        {!isCompleted ? (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-medium text-gray-900 mb-6">
                {currentQuestion.text}
              </h2>
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
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
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center space-y-4">
            <Award className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Quiz Completed!
            </h2>
            <p className="text-gray-600">
              Great job! You've earned points for today's quiz.
            </p>
            <Button className="w-full" onClick={() => console.log("View results", selectedAnswers)}>
              View Results
            </Button>
          </div>
        )}
      </main>
      <BottomNav />
    </div>
  );
}
