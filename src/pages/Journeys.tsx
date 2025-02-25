
import { useQuery } from "@tanstack/react-query";
import { Journey } from "@/types/quiz";
import { supabase } from "@/integrations/supabase/client";
import { BottomNav } from "@/components/bottom-nav";
import { ChevronLeft, Crown, Unlock, Search, MessageSquareCheck, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Journeys() {
  const navigate = useNavigate();
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

  const journey = journeys?.[0]; // For now, showing the first journey

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pb-24">
        <main className="container max-w-lg mx-auto px-4 pt-8 animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
          <div className="h-32 bg-gray-200 rounded mb-8" />
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 bg-gray-200 rounded" />
            ))}
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-24">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container max-w-lg mx-auto px-4 py-3 flex items-center">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900 mx-auto">
            {journey?.title || "Journey Details"}
          </h1>
        </div>
      </header>

      <main className="container max-w-lg mx-auto px-4 pt-8 animate-slide-up">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <Crown className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-900 leading-relaxed">
              {journey?.description || 
                "Looking for the secrets to a loving, long-lasting relationship? You're in luck! Over the next 25 days, you'll uncover the secrets to becoming the best partner you can be in order to strengthen your relationship, from proven communication techniques you can practice right now to guaranteed relationship positivity boosters."}
            </p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary mb-8">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-primary-100 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-[#E2E5FF] flex items-center justify-center mb-4">
                <Unlock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Unlock</h3>
              <p className="text-gray-600">Get new conversation starters each day</p>
            </div>

            <div className="bg-primary-100 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-[#E2E5FF] flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Explore</h3>
              <p className="text-gray-600">Dive into strength and growth areas</p>
            </div>

            <div className="bg-primary-100 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-[#E2E5FF] flex items-center justify-center mb-4">
                <MessageSquareCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Answer</h3>
              <p className="text-gray-600">Answer the questions with your partner</p>
            </div>

            <div className="bg-primary-100 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-[#E2E5FF] flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Learn</h3>
              <p className="text-gray-600">Get expert guidance for your relationship</p>
            </div>
          </div>
        </section>

        <Button 
          className="w-full mt-12 py-6 text-lg bg-primary hover:bg-primary/90"
          onClick={() => console.log("Starting journey", journey?.id)}
        >
          <Crown className="w-5 h-5 mr-2" />
          Try Paired Premium
        </Button>
      </main>
      <BottomNav />
    </div>
  );
}
