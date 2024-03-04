import type { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {}

export const Header = ({children}: Props) => {
  return (
    <div className="fixed flex items-center justify-center w-full h-header bg-slate-700 shadow-2xl cursor-pointer z-50">
      <div className="max-w-header mx-auto px-4 xxs:px-8 flex justify-between items-center w-full">

      {children}
      </div>
    </div>
  )
}