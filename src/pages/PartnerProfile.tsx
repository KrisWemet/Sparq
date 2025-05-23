
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";
import { ChevronLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BottomNav } from "@/components/bottom-nav";
import { LoadingIndicator } from "@/components/ui/loading-indicator";
import { toast } from "sonner";

export default function PartnerProfile() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [partnerProfile, setPartnerProfile] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      loadPartnerProfile();
    } else {
      navigate("/auth");
    }
  }, [user]);

  const loadPartnerProfile = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // In a real app, you would fetch the partner's profile using their ID
      // For now, we'll just use the partner_name from the current user's profile
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (error) throw error;
      
      if (data) {
        // If partner_name is not provided, show an error
        if (!data.partner_name) {
          setError("No partner information found. Add your partner's name in your profile first.");
          setLoading(false);
          return;
        }
        
        // Simulate partner profile with data we have
        setPartnerProfile({
          full_name: data.partner_name || "Partner",
          email: "partner@example.com",
          avatar_url: "",
          anniversary_date: data.anniversary_date
        });
      }
    } catch (error: any) {
      console.error('Error loading partner profile:', error);
      setError("Failed to load partner profile. Please try again later.");
      toast.error('Failed to load partner profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container max-w-lg mx-auto px-4 py-3 flex items-center">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900 mx-auto">
            Partner Profile
          </h1>
        </div>
      </header>

      <main className="container max-w-lg mx-auto px-4 pt-6 animate-slide-up">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <LoadingIndicator size="lg" label="Loading partner profile..." />
          </div>
        ) : error ? (
          <Card className="mb-6">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="text-amber-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Partner Information Not Available</h3>
              <p className="text-gray-500 mb-4">{error}</p>
              <button 
                onClick={() => navigate("/profile")}
                className="px-4 py-2 bg-primary text-white rounded-lg"
              >
                Go to Your Profile
              </button>
            </CardContent>
          </Card>
        ) : partnerProfile && (
          <>
            <div className="flex flex-col items-center mb-8">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={partnerProfile.avatar_url || undefined} />
                <AvatarFallback>{partnerProfile.full_name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold text-gray-900">{partnerProfile.full_name}</h2>
              {partnerProfile.anniversary_date && (
                <div className="flex items-center gap-2 mt-2">
                  <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <span>Together since {new Date(partnerProfile.anniversary_date).toLocaleDateString()}</span>
                  </div>
                </div>
              )}
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Partner Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p className="text-gray-900">{partnerProfile.email}</p>
                </div>
                
                {partnerProfile.anniversary_date && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Anniversary</h3>
                    <p className="text-gray-900">{new Date(partnerProfile.anniversary_date).toLocaleDateString()}</p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Relationship Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4">
                  Take the relationship health quiz together to see your compatibility and areas for growth.
                </p>
                <button 
                  onClick={() => navigate("/quiz")}
                  className="w-full py-2 px-4 bg-primary text-white rounded-lg"
                >
                  Go to Relationship Quiz
                </button>
              </CardContent>
            </Card>
          </>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
}
