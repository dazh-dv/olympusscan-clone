'use client'
import { BarsArrowDown } from "@/components/icons"
import { ButtonIcon } from "@/components/button"
import { CardRectangular } from "@/components/cards"
import useWindows from "@/hooks/use-windows"
import { TypeSerieFilter } from "@/types/series"

type typeData = {
  current_page: number,
  total: number,
  per_page: number,
}

export default function SeriesFilter({ items, data }:{ items: Array<TypeSerieFilter>, data: typeData }){

  const { setDrawerSeries } = useWindows()

  const propsIcons = {
    className: 'w-6 h-6 outline-[0px]'
  }

  return(
    <>
      <section className="flex flex-col gap-6">
        <div className="flex-between px-2 md:px-0">
          <div>
            <h2 className="text-2xl md:text-3xl">
              Series
            </h2>
            <small className="text-gray-400">
              Mostrando Listado de series
            </small>
          </div>
          <div>
            <div className="flex gap-2 md:gap-6">
              <ButtonIcon onClick={() => setDrawerSeries(true)}>
                <BarsArrowDown {...propsIcons} />
              </ButtonIcon>
              {/* <DrawerFilter /> */}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-4 px-1 md:px-0">
          {items.map(item => <CardRectangular key={item.id} item={item} />)}
        </div>
        <div className="mt-8 p-16 flex-center text-3xl">
          <i className="i-line-md-loading-twotone-loop" />
        </div>
      </section>
    </>
  )
}