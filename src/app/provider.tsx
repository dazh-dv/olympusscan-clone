'use client';

import ModalAuth from "@/components/modal-auth";
import { ModalSeries } from "@/components/modal-series";
import { AuthProvider } from "@/context/auth-provider";
import { WinwowsProvider } from "@/context/windows-provider";
import { UserType } from "@/types/auth";

export default function Provider({ auth, children }:{ auth: UserType | undefined, children: React.ReactNode }){
  return(
    <>
      <AuthProvider session={auth}>
        <WinwowsProvider>
          <ModalAuth />
          <ModalSeries />
          {children}
        </WinwowsProvider>
      </AuthProvider>
    </>
  )
}