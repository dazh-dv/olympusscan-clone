import SeriesFilter from "@/app/sections/series/filter";
import Recommendations from "@/app/sections/series/recomendations";
import Advert from "@/components/advert";
import { getSeriesPage } from "@/services/series";

export default async function Series({ searchParams }: {
  searchParams: { [key: string]: string | undefined }
}) {

  const filterParams = {
    page: searchParams?.page ?? 1,
    direction: searchParams?.direction ?? 'asc',
    type: searchParams?.type ?? 'comic',
    perPage: searchParams?.per_page ?? '15'
  }

  const data = await getSeriesPage(filterParams)

  return(
    <div className="flex flex-col gap-12">
      <Recommendations title={true} items={data.recommended_series} />
      <Advert />
      <SeriesFilter items={data.series} data={data.data}  />
      <Advert />
    </div>
  )
}