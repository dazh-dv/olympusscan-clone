import { UserType } from "@/types/auth";
import { useState } from "react";
import { ArrowRightOnRectangule, BookMark } from "@/components/icons";
import { type Route } from "next";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import useAuth from "@/hooks/use-auth";

function getInitialsByEmail(email: string): string {
  return email.charAt(0);
}

function getNameByEmail(email: string): string {
  const emailArray = email.split('@')
  return emailArray[0]
}

function getInitialsByName(name: string): string {
  const words = name.split(" ");
  if (words.length === 1) {
    return words[0].charAt(0);
  } else if (words.length >= 2) {
    return words[0].charAt(0) + words[1].charAt(0);
  } else {
    return "";
  }
}

function LinkMenuUser({ icon, title, href }:{ icon: React.ReactNode, title: string, href: Route<string> | URL }){
  return(
    <li className="">
      <Link href={href} className="flex items-center gap-4 px-3 py-2 hover:bg-sky-500/50 transition-background-color rounded-xl group sf-ripple-container">
        <div className="aspect-square w-7 flex-center rounded-full text-sky-300">
          {icon}
        </div>
        <span className="text-sm md:text-base">{title}</span>
      </Link>
    </li>
  )
}

export function UserMenu({ auth }:{ auth: UserType }){

  const [showMenu, setShowMenu] = useState(false)
  const [process, setProcess] = useState(false)
  const { logout } = useAuth()

  const propsIcon = {
    className: 'w-5 h-5 group-hover:text-white transition-color'
  }

  const variants = {
    hidden: { opacity: 0, transform: 'translateY(-50px)' },
    visible: { opacity: 1, transform: 'translateY(0)' },
  }

  const variantsLogout = {
    hidden: { opacity: 0.5, transform: 'translateY(-20px)' },
    visible: { opacity: 1, transform: 'translateY(0)' },
  }

  const handleLogout = () => {
    setProcess(true)
    logout()
  }

  return(
    <div className="relative">
      <div>
        <div className="relative">
          <button
            onClick={()=> setShowMenu(v => !v)}
            aria-label="My Profile"
            title="My Profile"
            className="aspect-square rounded-full bg-sky-300/25 text-sky-500 hover:bg-sky-300/10 transition-background-color w-12 flex-center uppercase font-bold sf-ripple-container"
          >
            <div>
              {auth.name ? getInitialsByName(auth.name) : getInitialsByEmail(auth.email)}
            </div>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              duration: 0.6
            }}
            className="absolute right-0 top-full mt-4 bg-neutral-800/80 backdrop-blur rounded-xl z-100"
          >
            <div className="w-84 md:w-96 p-2 rounded-xl flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-neutral-900/50 p-4 rounded-xl shadow-xl">
                <div aria-label="My Profile" title="My Profile" className="aspect-square rounded-full bg-sky-300/25 text-sky-500 hover:bg-sky-300/10 transition-background-color w-12 flex-center uppercase font-bold">
                  <div>{auth.name ? getInitialsByName(auth.name) : getInitialsByEmail(auth.email)}</div>
                </div>
                <div className="flex-between w-full">
                  <div>
                    <div className="font-medium line-clamp-1">{auth.name ?? getNameByEmail(auth.email)}</div>
                    <div className="text-xs text-slate-500 line-clamp-1">{auth.email}</div>
                  </div>
                  {!process && (
                    <motion.button
                      variants={variantsLogout}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{
                        duration: 0.6
                      }}
                      onClick={handleLogout}
                      className="text-2xl text-rose-300">
                        <ArrowRightOnRectangule className="w-6 h-6" />
                    </motion.button>
                  )}
                  {process && (
                    <motion.button
                      variants={variantsLogout}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{
                        duration: 0.6
                      }}
                      className="text-2xl text-rose-300"
                    >
                      <i className="i-line-md-loading-twotone-loop" />
                    </motion.button>
                  )}
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-y-1">
                <LinkMenuUser href="/perfil" title="Perfil" icon={<BookMark {...propsIcon} />} />
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}