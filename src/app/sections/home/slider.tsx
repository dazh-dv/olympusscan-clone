import { Image } from "@/components/lazy-image";
import { TypeSerieSlider } from "@/types/series";

export default function Slider({ items }:{ items: Array<TypeSerieSlider> }) {
  return(
    <section className="grid grid-cols-2 gap-1 md:gap-4 max-h-[41rem] md:max-h-96 px-1 md:px-0">
      {items.map((item, index) =>(
        <a
          href={`/series/${item.slug}`}
          key={item.slug}
          className={index === 0 ? "col-span-2 md:col-span-1 md:row-span-2 h-96 block relative rounded-md sf-ripple-container" : "h-46 block relative rounded-md sf-ripple-container"}
        >
          <div className="relative object-cover w-full h-full rounded-md">
            <Image
              srcset={index === 0 ? item.banner_srcset : item.banner_mini_srcset}
              alt={item.title}
              className="object-cover rounded-inherit w-full h-full"
            />
          </div>
          <div className="pointer-events-none rounded-md absolute-b-left w-full h-2/4 bg-gradient-to-b from-transparent via-gray-800/70 to-gray-800/90" />
          <div className="absolute-b-left w-full py-2 md:py-4 px-1 md:px-4 rounded-inherit flex flex-col gap-2">
            <h3 className="text-lg md:text-xl leading-5">{item.title}</h3>
            <p className="line-clamp-2 font-light text-sm text-gray-400">{item.description}</p>
          </div>
        </a>
      ))}
    </section>
  )
}