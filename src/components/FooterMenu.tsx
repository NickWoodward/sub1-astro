import type { ComponentProps } from "react"
import { cn } from "../utils/utils"

interface Props extends ComponentProps<"div">{}

export const FooterMenu = ({ className }: Props) => {
  const classes = cn("flex flex-col text-left sm:text-right sm:flex-row sm:space-x-6 space-y-0.5 text-sm text-gray-200", className)
  return (    
    <div className={classes}>
      <div className="hover:text-gray-200 text-right cursor-pointer">About</div>
      <div className="hover:text-gray-200 text-right cursor-pointer">Why Us</div>
      <div className="privacy-link--footer hover:text-gray-200 text-right cursor-pointer">Privacy Policy</div>
    </div>
  )
}