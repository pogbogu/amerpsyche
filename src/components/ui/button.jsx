import React from "react";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-white hover:bg-primary/90": variant === "default",
            "bg-secondary text-white hover:bg-secondary/90":
              variant === "secondary",
            "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white":
              variant === "outline",
            "bg-accent text-white hover:bg-accent/90": variant === "accent",
          },
          {
            "h-10 px-6 py-2 text-sm": size === "default",
            "h-8 px-4 py-1 text-xs": size === "sm",
            "h-12 px-8 py-3 text-base w-48": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
