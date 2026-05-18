import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl p-6 transition-all duration-300",
          {
            "bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10":
              variant === "glass",
            "bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10":
              variant === "gradient",
            "bg-white/5 border border-white/10": variant === "default",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;