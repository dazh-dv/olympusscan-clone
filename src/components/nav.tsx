import { NavLink, NavLinkMobile } from "@/components/navLink";
import { Home, RectangleStack, Square3Stack3D } from "@/components/icons";
import ButtonActionsNav from "@/components/buttons-actions-nav";


export function Nav(){
  const propsIcons = {
    className: 'w-5 h-5 outline-[0px]'
  }

  return(
    <nav className="hidden md:flex items-center gap-4 relative">
      <NavLink
        href="/"
        icon={<Home {...propsIcons} />}
      >
        <span>Inicio</span>
      </NavLink>
      <NavLink
        href="/series"
        icon={<RectangleStack {...propsIcons} />}
      >
        <span>Series</span>
      </NavLink>
      <NavLink
        href="/capitulos"
        icon={<Square3Stack3D {...propsIcons} />}
      >
        <span>Capitulos</span>
      </NavLink>
    </nav>
  )
}

export function NavMobile(){
  const propsIcons = {
    className: 'w-6 h-6 outline-[0px]'
  }
  
  return(
    <nav className="bg-gray-900 p-4 flex items-center justify-between shadow-lg md:hidden">
      <NavLinkMobile
        href="/"
        icon={<Home {...propsIcons} />}
      >Inicio</NavLinkMobile>
      <NavLinkMobile
        href="/series"
        icon={<RectangleStack {...propsIcons} />}
      >Series</NavLinkMobile>
      <NavLinkMobile
        href="/capitulos"
        icon={<Square3Stack3D {...propsIcons} />}
      >Capitulos</NavLinkMobile>
      
      <ButtonActionsNav />
    </nav>
  )
}