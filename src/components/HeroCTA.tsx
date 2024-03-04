import type { ComponentProps } from "react"
import { cn } from "../utils/utils"
import { MailIcon } from "../utils/svgComponents"

interface Props extends ComponentProps<"div"> {}

export const HeroCTA = ({className, children}: Props) => {
  const classes = cn("cta", className)
  return (
    <div className={classes}>
      <div className="flex h-12 gap-x-2">
        <input type="email" name="email" id="email--hero" className="email--hero block w-full px-4 rounded-md border-gray-300  text-base placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary xs:flex-1" placeholder="Enter your email" />
        <button type="submit" className="rounded-md border border-transparent bg-primary px-4 text-base font-medium text-white shadow-sm hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 xs:inline-flex xs:w-auto xs:flex-shrink-0 xs:items-center xs:justify-center xs:mt-0 xs:ml-3">
          <MailIcon />
        </button>   
      </div>
      <p className="privacy-link w-full pl-1 mt-3.5 sm:mt-6 leading-6 sm:leading-7 text-sm sm:text-base text-slate-300">
        We care about your data. <br className="sm:hidden"/> Read our
        <a href="#" className="font-medium lg:text-gray-900 underline"> Privacy Policy</a>.
      </p> 
    </div>
  )
}