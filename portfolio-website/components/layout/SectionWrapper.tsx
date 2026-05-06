import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  fullWidth?: boolean;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ className, id, fullWidth = false, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "py-20 px-4 md:px-8 lg:px-16",
          fullWidth ? "w-full" : "max-w-7xl mx-auto",
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;