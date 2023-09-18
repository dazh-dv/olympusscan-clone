'use client';
import { ButtonIcon } from "@/components/button";
import { MagnifyingGlass, OutlineUser } from "@/components/icons";
import useAuth from "@/hooks/use-auth";
import useWindows from "@/hooks/use-windows";
import { UserMenu } from "@/components/user-menu";


export default function ButtonActionsNav(){

  const { setShowModal, auth, loading } = useAuth()
  const { setSeriesModal } = useWindows()

  const propsIcons = {
    className: 'w-6 h-6 outline-[0px]'
  }

  return(
    <>
      <ButtonIcon onClick={()=> setSeriesModal(true)}>
        <MagnifyingGlass {...propsIcons}/>
      </ButtonIcon>
      {(!loading && auth?.email) && (
        <UserMenu auth={auth} />
      )}
      {(!loading && !auth.email) && (
        <ButtonIcon onClick={()=> setShowModal(true)}>
          <OutlineUser {...propsIcons}/>
        </ButtonIcon>
      )}
      {loading && (
        <ButtonIcon>
          <i className="i-line-md-loading-twotone-loop text-2xl"/>
        </ButtonIcon>
      )}
    </>
  )
}