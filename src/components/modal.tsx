'use client'
import { motion, AnimatePresence } from "framer-motion"
import { ButtonMarkX } from "@/components/button"

interface PropsModal {
  children: React.ReactNode,
  header?: React.ReactElement,
  show: boolean,
  setShow: React.Dispatch<any>,
  process?: boolean,
}

export default function Modal({ children, header, show, setShow, process = false }:PropsModal){

  const variantsDivParent = {
    hidden: { transform: 'translateY(50px)', opacity: 0.5 },
    visible: { transform: 'translateY(0)', opacity: 1 }
  }
  const variantsHeadModal = {
    hidden: { top: 0, opacity: 0.5 },
    visible: { top: -57, opacity: 1 }
  }

  return(
    <AnimatePresence>
      {show && (
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: .5,
          }}
          className="fixed top-0 left-0 w-full h-screen z-100 bg-gray-600/70 flex-center"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variantsDivParent}
            className="relative mx-1"
          >
            {!process &&
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variantsHeadModal}
                className="absolute left-0 w-full flex-between z-10 top-[-57px]"
              >
                <div>{header}</div>
                <ButtonMarkX onClick={setShow} />
              </motion.div>
            }
            <main tabIndex={-1} className="relative z-20 translate-y-0 opacity-100">
              {children}
            </main>
          </motion.div>
      </motion.article>
      )}
    </AnimatePresence>
  )
}