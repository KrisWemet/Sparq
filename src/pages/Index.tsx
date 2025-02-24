
import { HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActivityCard } from "@/components/activity-card";
import { BottomNav } from "@/components/bottom-nav";
import { useNavigate } from "react-router-dom";

const categories = [
  "Communication",
  "Quality Time",
  "Affection",
  "Support",
  "Trust",
  "Values",
  "Future Goals",
  "Conflict Resolution",
  "Independence",
  "Boundaries",
  "Family",
  "Lifestyle",
  "Intimacy",
  "Finances",
  "Shared Activities"
];

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <main className="container max-w-lg mx-auto px-4 pt-8 animate-slide-up">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ignite Your Love Story
          </h1>
          <p className="text-gray-600 mb-8">
            Strengthen your bond through meaningful conversations and shared experiences
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <HeartHandshake className="mr-2" />
            Begin Your Journey
          </Button>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Daily Connection</h2>
          
          <ActivityCard 
            title="Daily Relationship Quiz" 
            type="quiz"
            description="Fun questions to learn more about each other. Complete today's quiz to earn points!"
            progress={75}
            actionLabel="Start Quiz"
            onAction={() => navigate("/quiz")}
          />

          <ActivityCard 
            title="Conversation Starter" 
            type="question"
            description="What's your idea of a perfect weekend together? Share your thoughts and dreams."
            onAction={() => console.log("Answer opened")}
            actionLabel="Share Answer"
          />

          <ActivityCard 
            title="Love Language Game" 
            type="game"
            description="A fun way to learn and practice each other's love languages through interactive challenges."
            locked
            actionLabel="Play Game"
            onAction={() => console.log("Game started")}
          />

          <ActivityCard 
            title="Expert Tips & Exercises" 
            type="quiz"
            description="Research-based relationship exercises from relationship experts."
            locked
            actionLabel="View Exercises"
            onAction={() => console.log("Exercises opened")}
          />
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quiz Categories</h2>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => navigate("/quiz")}
                  className="flex-shrink-0 p-4 rounded-lg shadow-sm min-w-[140px] text-center transition-colors bg-white text-gray-600 hover:bg-primary/5"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
