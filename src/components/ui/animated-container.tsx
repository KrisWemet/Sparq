
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

const animatedContainerVariants = cva("", {
  variants: {
    variant: {
      fadeIn: "animate-fade-in",
      slideUp: "animate-slide-up",
      slideDown: "animate-slide-down",
      slideLeft: "animate-slide-left",
      slideRight: "animate-slide-right",
      pulse: "animate-pulse",
      bounce: "animate-bounce",
      spin: "animate-spin",
    },
    duration: {
      fast: "duration-200",
      normal: "duration-300",
      slow: "duration-500",
      slower: "duration-700",
    },
    delay: {
      none: "delay-0",
      short: "delay-100",
      medium: "delay-300",
      long: "delay-500",
    },
  },
  defaultVariants: {
    variant: "fadeIn",
    duration: "normal",
    delay: "none",
  },
})

export interface AnimatedContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof animatedContainerVariants> {}

export const AnimatedContainer = React.forwardRef<
  HTMLDivElement,
  AnimatedContainerProps
>(({ className, variant, duration, delay, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(animatedContainerVariants({ variant, duration, delay }), className)}
    {...props}
  />
))

AnimatedContainer.displayName = "AnimatedContainer"

// Define animation variants
const animationVariants = {
  fadeIn: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },
}

// Create a specific interface for the AnimatedList component that extends the motion div props
interface AnimatedListProps {
  children: React.ReactNode;
  variant?: keyof typeof animationVariants;
  staggerDelay?: number;
  duration?: "fast" | "normal" | "slow" | "slower";
  className?: string;
}

export function AnimatedList({
  children,
  variant = "fadeIn",
  staggerDelay = 0.1,
  duration = "normal",
  className,
  ...props
}: AnimatedListProps) {
  // Convert string duration to number for framer-motion
  const durationMap = {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    slower: 0.7,
  }
  
  const actualDuration = typeof duration === "string" ? durationMap[duration as keyof typeof durationMap] : 0.3;
  
  return (
    <motion.div
      className={cn(className)}
      initial="initial"
      animate="animate"
      // Remove the exit property since it's causing type errors
      {...props}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={animationVariants[variant as keyof typeof animationVariants]}
              transition={{ duration: actualDuration, delay: i * staggerDelay }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
