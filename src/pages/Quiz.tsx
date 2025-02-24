
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Award, ChevronRight, Plus } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import { Input } from "@/components/ui/input";

interface Question {
  id: number;
  text: string;
  options: string[];
  category: string;
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    category: "Communication",
    text: "When something's bothering me, I usually...",
    options: [
      "Talk it out right away",
      "Send a thoughtful text",
      "Call to chat about it",
      "Need some alone time first"
    ]
  },
  {
    id: 2,
    category: "Quality Time",
    text: "My perfect date night would be...",
    options: [
      "Getting outdoors and being active together",
      "Cozy night in with takeout and movies",
      "Checking out a new restaurant or event",
      "Trying something we've never done before"
    ]
  },
  {
    id: 3,
    category: "Affection",
    text: "When I want to show I care, I'm most likely to...",
    options: [
      "Give lots of hugs and kisses",
      "Tell them how special they are",
      "Do something helpful or thoughtful",
      "Plan quality time together"
    ]
  }
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [customAnswer, setCustomAnswer] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);

  const currentQuestion = sampleQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / sampleQuestions.length) * 100;

  const handleAnswer = (answer: string) => {
    if (answer === "other") {
      setShowCustomInput(true);
      return;
    }

    const newAnswers = { ...selectedAnswers };
    newAnswers[currentQuestion.id] = answer;
    setSelectedAnswers(newAnswers);
    setShowCustomInput(false);
    setCustomAnswer("");

    if (currentQuestionIndex < sampleQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleCustomAnswer = () => {
    if (customAnswer.trim()) {
      handleAnswer(customAnswer.trim());
    }
  };

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
              All Done!
            </h2>
            <p className="text-gray-600">
              Thanks for sharing! We'll compare your answers with your partner's responses.
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
