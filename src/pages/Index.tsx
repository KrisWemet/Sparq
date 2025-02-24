
import { HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActivityCard } from "@/components/activity-card";
import { CategoryCard } from "@/components/category-card";
import { BottomNav } from "@/components/bottom-nav";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Communication",
    image: "/lovable-uploads/4598ee82-a0b5-40df-8e9d-14bc621abde2.png"
  },
  {
    title: "Quality Time",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Trust & Support",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Future Goals",
    image: "https://images.unsplash.com/photo-1501286353178-1ec871214838?auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Shared Activities",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&h=600"
  }
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

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Quiz Categories</h2>
          <div className="overflow-x-auto -mx-4 px-4 pb-6">
            <div className="flex gap-4">
              {categories.map((category) => (
                <CategoryCard
                  key={category.title}
                  title={category.title}
                  imagePath={category.image}
                  onClick={() => navigate("/quiz")}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
