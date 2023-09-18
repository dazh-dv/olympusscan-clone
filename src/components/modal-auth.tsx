'use client'
import useAuth from "@/hooks/use-auth";
import Modal from "@/components/modal";
import { useState } from "react";
import { typeLogin, typeRegister, typeResetPass } from "@/constants/auth";
import { motion } from "framer-motion";
import { transtion, variantEnterToLeft, variantEnterToRight, variantInLeftOutRight } from "@/constants/transitions";
import Input from "@/components/input";
import { Check, LockClosed, Symbol } from "@/components/icons";

export default function ModalAuth(){

  const { showModal, setShowModal, setAuth } = useAuth()
  const [process, setProcess] = useState(false)
  const [typeForm, setTypeForm] = useState(typeLogin)
  const [errors, setErrors] = useState<{} | any>({})
  
  const handleChangeTypeForm = () => {
    setTypeForm((typeForm: string) => {
      if (typeForm === typeLogin) return typeRegister
      if (typeForm === typeRegister) return typeLogin
      return typeLogin
    })
  }
  
  const handleSubmit =  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrors({})
    setProcess(true)
  }

  return(
    <>
      <Modal
        process={process}
        show={showModal}
        setShow={() => setShowModal(false)}
        header={(
          <button onClick={handleChangeTypeForm} className="h-12 w-32 rounded-full bg-amber-500 text-gray-900 px-4 font-medium">
            {typeForm === typeLogin && <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={variantEnterToRight}
              transition={transtion}
            >Registrar</motion.div>}
            {typeForm === typeRegister && <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={variantEnterToLeft}
              transition={transtion}
            >Login</motion.div>}
            {typeForm === typeResetPass && <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={variantInLeftOutRight}
              transition={transtion}
            >Login</motion.div>}
          </button>
        )}
      >
        <form onSubmit={handleSubmit} className="w-full max-w-96 max-h-160 h-full transition-height bg-gray-800/80 backdrop-blur rounded-xl pt-8 px-2 pb-2 md:px-8 md:pb-8 overflow-hidden">
          <div className="flex-center flex-col gap-2 mb-4 md:mb-8">
            <div className="p-2 bg-neutral-700/80 rounded-full border border-slate-600">
              <img alt="logo" src="/olympus-logo-96.webp" className="w-18" />
            </div>
            <div className="text-2xl font-bold">Bienvenido de nuevo!</div>
            <p className="font-light text-xs text-center px-8 h-8 text-slate-400 line-clamp-3">Ingresa tus credenciales para acceder a tu cuenta.</p>
          </div>
          {typeForm === typeLogin && (
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={variantEnterToRight}
              transition={transtion}
              className="flex flex-col gap-4"
            >
              <Input
                id="email"
                placeholder="Correo"
                type="email"
                icon={<Symbol className="h-6 w-6" />}
                error={errors?.email}
              />
              <Input
                id="password"
                placeholder="Contraseña"
                type="password"
                icon={<LockClosed className="h-6 w-6" />}
                error={errors?.password}
              />
              <div className="flex-between">
                <label className="select-none cursor-pointer flex-center gap-2 rounded-lg pr-2 text-slate-400 text-xs">
                  <input type="checkbox" className="sr-only [&:checked~span]:bg-gray-50 [&:checked~span]:text-gray-800 [&:checked~span]:border-transparent" />
                  <span className="flex-center border border-gray-600 bg-gray-700 w-5 aspect-square rounded-lg text-transparent text-lg transition-all">
                    <Check className="w-[18px]" />
                  </span>
                  Recordarme
                </label>
                <button onClick={() => setTypeForm(typeResetPass)} type="button" className="text-xs text-neutral-400 px-2 rounded-md h-5 block">Recuperar contraseña</button>
              </div>
            </motion.div>
          )}
          {typeForm === typeRegister && (
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={variantEnterToLeft}
              transition={transtion}
              className="flex flex-col gap-4"
            >
              
              <Input
                id="email"
                placeholder="Correo"
                type="email"
                icon={<Symbol className="h-6 w-6" />}
                error={errors?.email}
              />
              <Input
                id="password"
                placeholder="Contraseña"
                type="password"
                icon={<LockClosed className="h-6 w-6" />}
                error={errors?.password}
              />
              <Input
                id="password_confirmation"
                placeholder="Confirmar Contraseña"
                type="password"
                icon={<LockClosed className="h-6 w-6" />}
                error={errors?.password_confirmation}
              />
            </motion.div>
          )}
          {typeForm === typeResetPass && (
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={variantInLeftOutRight}
              transition={transtion}
              className="flex flex-col gap-4"
            >
            <Input
              id="email"
              placeholder="Correo"
              type="email"
              icon={<Symbol className="h-6 w-6" />}
              error={errors.email}
            />
            <p className="block text-xs text-slate-500 min-h-20 max-h-20">El código será enviado a su correo es válido durante 30 minutos. Transcurrido ese tiempo, el código quedará inutilizado. Se puede solicitar un código de recuperación al día. Si no has recibido el código, no olvides revisar tu papelera de correo no deseado.</p>
            </motion.div>
          )}
          <button type="submit" className="mt-8 bg-amber-500 text-gray-900 font-medium p-2 rounded-xl w-full">
            {(!process && typeForm === typeLogin) && <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={variantEnterToRight}
              transition={transtion}
            >Enviar</motion.div>}
            {(!process && typeForm === typeRegister) && <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={variantEnterToLeft}
              transition={transtion}
            >Registrar</motion.div>}
            {(!process && typeForm === typeResetPass) && <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={variantInLeftOutRight}
              transition={transtion}
            >Reset</motion.div>}
            {process && (
              <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={variantInLeftOutRight}
              transition={transtion}
            >
              <i className="i-line-md-loading-twotone-loop text-2xl"/>
            </motion.div>
            )}
          </button>
        </form>
      </Modal>
    </>
  )
}