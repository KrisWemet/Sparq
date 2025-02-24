
import { Heart, Home, Search, Calendar, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Explore", path: "/explore" },
  { icon: MessageCircle, label: "Answers", path: "/answers" },
  { icon: Calendar, label: "Timeline", path: "/timeline" },
  { icon: Heart, label: "Us", path: "/us" },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-6 flex justify-between items-center">
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          className={`flex flex-col items-center space-y-1 ${
            location.pathname === item.path
              ? "text-primary"
              : "text-gray-500 hover:text-primary transition-colors"
          }`}
        >
          <item.icon size={24} />
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
