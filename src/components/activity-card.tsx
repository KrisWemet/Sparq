
import { cn } from "@/lib/utils";

interface ActivityCardProps {
  title: string;
  type: "quiz" | "question" | "game";
  className?: string;
  children?: React.ReactNode;
}

export function ActivityCard({ title, type, className, children }: ActivityCardProps) {
  return (
    <div 
      className={cn(
        "w-full rounded-2xl p-6 transition-all duration-300",
        type === "quiz" && "bg-secondary",
        type === "question" && "bg-primary-100",
        type === "game" && "bg-[#F0FFF4]",
        className
      )}
    >
      <div className="mb-2">
        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/80 text-primary">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      {children}
    </div>
  );
}
