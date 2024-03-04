import type { ComponentProps } from "react";
import { cn } from "../utils/utils";

interface Props extends ComponentProps<"div"> {}

export const SectionIntro = ({className, children}: Props) => {
  const classes = cn("relative mx-auto max-w-xl xxs:px-8  md:max-w-2xl lg:max-w-6xl xl:max-w-[1400px] lg:px-8 xl:px-0", className);
  return (
    <div className={classes}>
      {children}
    </div>
  )
}