import type { ComponentProps } from "react";

import { cn } from "../utils/utils";

interface Props extends ComponentProps<"div"> {
  items: {
    name:string,
    to:string
  }[],
  itemClassName?: string,
  close: (e:React.MouseEvent) => void
}

export const MobileMenu = ({className, itemClassName, items, close}: Props) => {

  // const classes = cn("border bg-slate-400 menu--mobile grid grid-cols-2 gap-0.5  w-full sm:hidden absolute inset-x-0 top-header z-10 origin-top-right transform  transition", className);

  // const itemClasses = cn("mobile-menu__item block bg-slate-600   last:border-b-0 border-slate-700 px-3 xs:px-8 py-4 text-sm text-start xs:text-left font-medium text-slate-300 hover:bg-slate-700 hover:text-primary", itemClassName);

  const classes = cn("menu--mobile relative w-full h-dvh px-2 py-2.5 sm:hidden absolute inset-x-0 top-header z-10 origin-top-right transform  transition", className);

  const itemClasses = cn("border-2 border-slate-200 hover:border-primary mobile-menu__item block bg-primaryVLight shadow rounded-md px-5 xs:px-8 py-3.5 text-sm text-center xs:text-left font-medium text-primaryDark hover:bg-slate-700 hover:text-white z-30", itemClassName);

    return (
      <div className={classes}>
        <div onClick={close} className="overlay absolute inset-0 w-full h-dvh bg-slate-800 opacity-75"></div>
        <div className="grid grid-cols-2 gap-2 z-30">
          {items.map(({ name, to}) => (
            <a key={name} href={to} data-active={false} className={itemClasses}>{name}</a>
          ))}
        </div>
      </div>
    )
  
  // return (
  //   <div 
  //     className={classes}
  //   >
  //     <div className="flex flex-col items-end w-full overflow-hidden">
  //       <a href="#about" id="about-mobile-item" className="mobile-menu__item block w-[120%] bg-slate-600  border-t-2 last:border-b-0 border-slate-700 px-8 py-4 text-base text-right font-medium text-slate-300 hover:bg-slate-700 hover:text-primary">About</a>

  //       <a href="#why-us" id="why-us-mobile-item" className="mobile-menu__item block w-[120%] bg-slate-600  border-t-2 last:border-b-0 border-slate-700 px-8 py-4 text-base text-right font-medium text-slate-300 hover:bg-slate-700 hover:text-primary">Why Us</a>

  //       <a href="#contact" id="contact-mobile-item" className="mobile-menu__item block w-[120%] bg-slate-600  border-t-2 last:border-b-0 border-slate-700 px-8 py-4 text-base text-right font-medium text-slate-300 hover:bg-slate-700 hover:text-primary ">Contact Us</a>

  //     </div>
  //  </div>
  // )
}