import { DiscordIcon, PatreonIcon, PaypalIcon } from "@/components/icons";

export default function FollowUs() {

  const propsIcon = {
    className: "h-4 w-4 bg-transparent inline-block align-middle"
  }

  return(
    <section className="rounded-md flex-center flex-col md:flex-row gap-4 md:flex-between mx-1 md:mx-0 p-4 bg-gray-800">
      <div className="font-header md:text-3xl text-2xl">Síganos</div>
      <div className="gap-1 flex-center">
        <a
          href="#"
          rel="noopener noreferrer"
          title="olympus discord"
          className="w-12 bg-gray-900/50 hover:bg-gray-700 transition-background-color aspect-square text-2xl rounded-full flex-center sf-ripple-container"
        >
          <DiscordIcon {...propsIcon} />
        </a>
        <a
          href="#"
          rel="noopener noreferrer"
          title="olympus paypal"
          className="w-12 bg-gray-900/50 hover:bg-gray-700 transition-background-color aspect-square text-2xl rounded-full flex-center sf-ripple-container"
        >
          <PaypalIcon {...propsIcon} />
        </a>
        <a
          href="#"
          rel="noopener noreferrer"
          title="olympus patreon"
          className="w-12 bg-gray-900/50 hover:bg-gray-700 transition-background-color aspect-square text-2xl rounded-full flex-center sf-ripple-container"
        >
          <PatreonIcon {...propsIcon} />
        </a>
      </div>
    </section>
  )
}