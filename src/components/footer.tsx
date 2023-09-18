import { ButtonIcon } from "@/components/button";
import { ArrowUp, Home, Square3Stack3D } from "@/components/icons";
import { NavLink } from "@/components/navLink";

export function Footer() {

  const propsIcons = {
    className: 'w-5 h-5 outline-[0px]'
  }
  return (
    <footer className="container mx-auto pb-16 mt-36 flex items-center justify-center flex-col md:flex-row gap-4 md:gap-0">
      <div className="flex flex-col md:items-initial gap-4 w-full px-4 md:px-0">
        <div className="flex items-center text-sm md:text-lg gap-4">
          <ButtonIcon
            name="ir arriba"
            title="ir arriba"
            radious="rounded-md"
            className="w-12 bg-gray-800 flex-center text-xl group"
          >
            <ArrowUp className="h-5 w-5" />
          </ButtonIcon>
          <NavLink
            href="/"
            icon={<Home {...propsIcons} />}
          >
            <span>Inicio</span>
          </NavLink>
          <NavLink
            href="/series"
            icon={<Square3Stack3D {...propsIcons} />}
          >
            <span>Series</span>
          </NavLink>
        </div>
        <div className="text-gray-400 text-center md:text-left">Olympus Scanlation es un sitio donde leer tus series Coreanas y Chinas traducidas al español por muchos grupos que lo conforman. Este sitio está protegido por reCAPTCHA. Se aplican la Política de privacidad y las Condiciones del servicio de Google.</div>
      </div>
      <div className="w-full flex items-center justify-center md:justify-inherit px-4 md:px-0">
        <div className="flex-center flex-col md:flex-row gap-4">
          <div className="aspect-square flex-center bg-gray-700 p-3 rounded-full">
            <img src="https://olympusv2.gg/olympus-logo-96.webp" alt="Olympus Scanlation" className="h-22 aspect-square rounded-full" />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <div className="text-xl md:text-2xl font-bold"> OlympusScan - Clone </div>
            <div className="text-sm md:text-base text-gray-400">
              Coded by{" "}
              <a href="https://github.com/rem-ds" className="text-sky-300 hover:text-sky-400 transition-color font-medium tracking-wide">Raka to dev</a>
            </div>
            {/* <div class="flex items-center justify-center md:justify-inherit gap-4">
              <a href="https://discord.gg/n5WskNraPM" rel="noopener noreferrer" class="text-lg sf-ripple-container" name="olympus discord" title="olympus discord"><i i="logos-discord-icon"></i></a>
              <a href="https://www.paypal.com/paypalme/OlympusScanlation?country.x=CO&amp;locale.x=es_XC" rel="noopener noreferrer" class="text-lg sf-ripple-container" name="olympus paypal" title="olympus paypal"><i i="logos-paypal"></i></a>
              <a href="https://www.patreon.com/OlympusScanlation" rel="noopener noreferrer" class="text-lg sf-ripple-container" name="olympus patreon" title="olympus patreon"><i i="logos-patreon"></i></a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}