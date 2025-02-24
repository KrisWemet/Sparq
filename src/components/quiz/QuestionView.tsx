
import { Award, ChevronRight, Plus, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Question } from "@/types/quiz";
import { toast } from "sonner";

interface QuestionViewProps {
  currentQuestion: Question;
  showCustomInput: boolean;
  customAnswer: string;
  onAnswerSubmit: (answer: string) => void;
  onCustomAnswerChange: (value: string) => void;
  onNudgePartner: () => void;
}

export function QuestionView({
  currentQuestion,
  showCustomInput,
  customAnswer,
  onAnswerSubmit,
  onCustomAnswerChange,
  onNudgePartner
}: QuestionViewProps) {
  return (
    <div className="space-y-6">
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
          onClick={onNudgePartner}
          className="shrink-0"
        >
          <Bell className="h-4 w-4" />
        </Button>
      </header>

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
              onClick={() => onAnswerSubmit(option)}
            >
              {option}
              <ChevronRight className="w-4 h-4" />
            </Button>
          ))}
          <Button
            variant="outline"
            className="w-full justify-between text-left font-normal hover:text-primary hover:border-primary"
            onClick={() => onAnswerSubmit("other")}
          >
            Something else...
            <Plus className="w-4 h-4" />
          </Button>

          {showCustomInput && (
            <div className="mt-4 space-y-3">
              <Input
                placeholder="Tell us your answer..."
                value={customAnswer}
                onChange={(e) => onCustomAnswerChange(e.target.value)}
                className="w-full"
              />
              <Button 
                className="w-full"
                onClick={() => onAnswerSubmit(customAnswer.trim())}
                disabled={!customAnswer.trim()}
              >
                Submit Your Answer
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
