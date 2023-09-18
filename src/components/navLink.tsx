'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from "framer-motion";
import { type Route } from "next";

type T = string;

interface PropsNavLink {
  href:  Route<T> | URL,
  icon: React.ReactElement,
  children: React.ReactNode,
}

export function NavLink({ href, icon, children }:PropsNavLink){

  const path = usePathname()

  return(
    <Link
      href={href}
      className={`px-3 py-0.5 rounded-md transition-background-color flex items-center gap-2 backdrop-blur ${(path === href) ? 'bg-amber-300/25 text-amber-500' : 'hover:bg-gray-800'}`}
    >
      {icon}
      {children}
    </Link>
  )
}

export function NavLinkMobile({ href, icon, children }:PropsNavLink){

  const path = usePathname()

  const variant = {
    hidden: { width: 0 },
    visible: { width: 'inherit' }
  }

  return(
    <AnimatePresence>
      <Link href={href} className={`rounded-full outline-[0px] flex-start transition-all duration-300 overflow-hidden font-medium ${(path === href) ? 'bg-amber-400 text-gray-900' : ''}`}>
        <div className="min-w-10 w-10 h-10 flex-center">
          {icon}
        </div>
        {(path === href) && (
          <motion.span
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variant}
            className="pr-5"
          >
            {children}
          </motion.span>
        )}
      </Link>
    </AnimatePresence>
  )
}