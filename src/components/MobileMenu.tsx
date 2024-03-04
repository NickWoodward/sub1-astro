import type { ComponentProps } from "react";

import { cn } from "../utils/utils";

interface Props extends ComponentProps<"div"> {
  items: {
    name:string,
    to:string
  }[];
  itemClassName?: string;
}

export const MobileMenu = ({className, itemClassName, items}: Props) => {

  const classes = cn("border bg-slate-400 menu--mobile grid grid-cols-2 gap-0.5  w-full sm:hidden absolute inset-x-0 top-header z-10 origin-top-right transform  transition", className);

  const itemClasses = cn("mobile-menu__item block bg-slate-600   last:border-b-0 border-slate-700 px-3 xs:px-8 py-4 text-sm text-start xs:text-left font-medium text-slate-300 hover:bg-slate-700 hover:text-primary", itemClassName);

    return (
      <div className={classes}>
        {items.map(({ name, to}) => (
          <a key={name} href={to} data-active={false} className={itemClasses}>{name}</a>
        ))}
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