import { CardUpdateRectangular } from "@/components/cards";
import { ArrowToRightOnSquare } from "@/components/icons";
import Section from "@/components/section";
import { TypeSerieNewChapter } from "@/types/series";
import Link from "next/link";

export default function NewReleases({ items }:{ items: Array<TypeSerieNewChapter>}){
  return(
    <Section
      title="Nuevos Lanzamientos"
      description="Se han lanzado nuevos capítulos tanto para novelas como para cómics."
      header={{
        to: '/capitulos',
        label: 'archive filtering menu',
        icon: (<ArrowToRightOnSquare className="md:w-[30px] md:h-[30px] w-6 h-6" />)
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-4">
        {items.map(item => <CardUpdateRectangular key={item.id} item={item} />)}
      </div>
      <div className="flex-center">
        <Link href="/capitulos" className="bg-amber-300 text-gray-900 flex-center gap-2 px-6 py-2 rounded-full w-2/4 sf-ripple-container" aria-label="archive filtering menu">
          <span>Ver más</span>
          <ArrowToRightOnSquare className="h-4 w-4" />
          <i className="i-heroicons-arrow-top-right-on-square-20-solid"></i>
        </Link>
      </div>
    </Section>
  )
}