import type { ComponentProps } from "react";
import { cn } from "../utils/utils";

interface Props extends ComponentProps<"div"> {
  description: string
}

export const SectionDescription = ({description, className}: Props) => {
  const classes = cn("description mt-5 max-w-prose text-lg text-gray-500", className);
  return (
    <p className={classes}>{description}</p>
  )
}