/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Nav, NavMobile } from "@/components/nav";
import ButtonActionsNav from "@/components/buttons-actions-nav";

export default function Header(){
  return(
    <header className="md:py-6 md:px-0 mb-6 relative z-20 md:pt-6">
      <div className="container mx-auto hidden md:flex items-center justify-between">
        <div className="flex gap-8">
          <Link href="/" className="max-w-14 max-w-14 md:max-w-18 rounded-full">
            <img src="https://olympusv2.gg/olympus-logo-96.webp" alt="Olympus Scanlation" className="w-14 md:w-18 aspect-square" />

          </Link>
          <Nav />
          
        </div>
        <div className="flex-end gap-2 md:gap-6">
          <ButtonActionsNav />
        </div>
      </div>
      <NavMobile />
    </header>
  )
}