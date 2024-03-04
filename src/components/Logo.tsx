import type { ComponentProps } from "react";
import { cn } from "../utils/utils";
import { cva } from "class-variance-authority";

interface Props extends ComponentProps<"div"> {
  size?: "sm" | "md" | "lg",
}

const logoVariants = cva("logo relative border-l-2 border-primary", {
  variants: {
    size: {
      sm: "text-2xl",
      md: "text-3xl",
      lg: "text-4xl",
    }
  },
  defaultVariants: {
    size: "md",
  }
});

export const Logo = ({className, size = "md"}: Props) => {
  const classes = cn(" pl-3 text-white tracking-tighter uppercase", className);

  return (
    <a href="#hero">
      <div className={logoVariants({ size, className: classes })}>Sub<span className={cn("text-primary",
        size==="sm" && "ml-2",
        size==="md" &&  "ml-2",
      )}>1</span>
    </div>
  </a>
  );
}