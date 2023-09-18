'use client'
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from 'react-dom';
import { XMark } from "@/components/icons";

export default function Drawer ({ children, isOpen, close }:{ children: React.ReactNode, isOpen: boolean, close: ()=> void}) {

  return (
    <AnimatePresence>
      {isOpen &&
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: .5,
            ease: "easeOut",
          }}
          className="fixed top-0 left-0 w-full h-screen z-[100] bg-neutral-600/70 ease-linear duration-600"
        >
          <motion.main
            tabIndex={-1}
            initial={{ transform: 'translateX(50px)', opacity: 0.5 }}
            animate={{ transform: 'translateX(0)', opacity: 1 }}
            exit={{ transform: 'translateX(50px)', opacity: 0.5 }}
            transition={{
              duration: .5,
              ease: "easeOut",
            }}
            className="fixed top-0 right-0 w-full max-w-96 md:max-w-[38rem] bg-neutral-800/80 backdrop-blur h-screen px-4 md:px-8 py-8"
          >
            <motion.button
              onClick={() => close()}
              initial={{ left: '0', opacity: 0.5 }}
              animate={{ left: '-96px', opacity: 1 }}
              exit={{ left: '0', opacity: 0.5 }}
              transition={{
                duration: .5,
                ease: "easeOut",
              }}
              className="aspect-square rounded-full hover:bg-neutral-800/70 transition-background-color p-2 max-md:!hidden flex items-center justify-center absolute top-7 bg-neutral-800/70 transition-background-color text-3xl"
            >
              <XMark className="h-[30px] w-[30px]" />
            </motion.button>
            { children }
          </motion.main>
        </motion.article>
      }
    </AnimatePresence>
  )
}