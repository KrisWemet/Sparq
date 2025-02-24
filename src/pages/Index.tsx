
import { HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActivityCard } from "@/components/activity-card";
import { BottomNav } from "@/components/bottom-nav";

export default function Index() {
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
          
          <ActivityCard title="Couple Talk" type="quiz">
            <p className="text-gray-600 mb-4">
              Explore how you communicate and understand each other better
            </p>
            <Button variant="secondary" className="w-full">Start Quiz</Button>
          </ActivityCard>

          <ActivityCard title="Dinner Preferences" type="question">
            <p className="text-gray-600 mb-4">
              What's your favorite setting for sharing a meal together?
            </p>
            <div className="flex justify-end">
              <Button variant="outline">Answer</Button>
            </div>
          </ActivityCard>

          <ActivityCard title="Staying Connected" type="game">
            <p className="text-gray-600 mb-4">
              Fun activities to keep your connection strong
            </p>
            <Button variant="outline" className="w-full">Play Now</Button>
          </ActivityCard>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
