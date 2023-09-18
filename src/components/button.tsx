import { XMark } from "@/components/icons"

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  radious?: string,
  className?: string 
}

export function ButtonIcon({ children, radious = "rounded-full", className, ...props }:ButtonIconProps) {
  return(
    <button className={`aspect-square ${radious} hover:bg-gray-800/70 transition-background-color p-2 ${className}`} {...props}>
      {children}
    </button>
  )
}

export function ButtonMarkX({ ...props }){
  return(
    <button className="w-12 aspect-square bg-gray-900/50 hover:bg-gray-900/80 backdrop-blur transition-background-color rounded-full flex-center text-3xl" {...props}>
      <XMark className="h-[30px] w-[30px]" />
    </button>
  )
}