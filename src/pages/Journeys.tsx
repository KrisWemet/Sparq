
import { useQuery } from "@tanstack/react-query";
import { Journey } from "@/types/quiz";
import { supabase } from "@/integrations/supabase/client";
import { ActivityCard } from "@/components/activity-card";
import { BottomNav } from "@/components/bottom-nav";
import { Award } from "lucide-react";

export default function Journeys() {
  const { data: journeys, isLoading } = useQuery({
    queryKey: ['journeys'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('journeys')
        .select('*');
      
      if (error) throw error;
      return data as Journey[];
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pb-24">
        <main className="container max-w-lg mx-auto px-4 pt-8 animate-pulse">
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="w-full h-48 bg-white rounded-2xl"
              />
            ))}
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <main className="container max-w-lg mx-auto px-4 pt-8 animate-slide-up">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Path to Together
          </h1>
          <p className="text-gray-600">
            Strengthen your relationship through guided journeys of growth and connection
          </p>
        </header>

        <section className="space-y-6">
          {journeys?.map((journey) => (
            <ActivityCard
              key={journey.id}
              title={journey.title}
              type={journey.type === "communication" ? "quiz" : 
                    journey.type === "intimacy" ? "question" : "game"}
              description={journey.description}
              progress={0}
              onAction={() => console.log("Starting journey:", journey.id)}
              actionLabel="Begin Journey"
            >
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-gray-600">
                  {journey.type.charAt(0).toUpperCase() + journey.type.slice(1)} Journey
                </span>
              </div>
            </ActivityCard>
          ))}
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
