import { type Route } from "next"
import Link from "next/link"

interface PropsSection {
  title: string,
  description: string,
  header?: {
    to: Route<string> | URL,
    label: string,
    icon: React.ReactNode
  },
  children: React.ReactNode
}

export default function Section({ title, description, header, children }:PropsSection){
  return(
    <section className="mx-1 md:mx-0 flex flex-col gap-6">
      <div className="flex-between px-2 md:px-0">
        <div>
          <h2 className="text-2xl md:text-3xl">{title}</h2>
          <small className="text-gray-400">{description}</small>
        </div>
        <div>
          {header && (
            <Link href={header.to} className="block aspect-square rounded-full p-2 md:p-1 hover:bg-gray-800 transition-background-color sf-ripple-container" aria-label={header.label}>
              {header.icon}
            </Link>
          )}
        </div>
      </div>
      {children}
    </section>
  )
}