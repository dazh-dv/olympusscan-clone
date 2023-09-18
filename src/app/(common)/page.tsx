import { getHomeSeries } from "@/services/series"
import Slider from "@/app/sections/home/slider"
import PopularDay from "@/app/sections/home/popular-day"
import Advert from "@/components/advert"
import FollowUs from "@/components/follow-us"
import NewReleases from "@/app/sections/home/new-releases"
import Announcement from "@/app/sections/home/announcement"
import Novels from "@/app/sections/home/novels"

export const dynamic = 'force-dynamic'

export default async function Home() {

  const data = await getHomeSeries()

  return (
    <div className="flex flex-col gap-12">
      <Slider items={data.slider} />
      <PopularDay items={data.popular_comics} />
      <Advert />
      <FollowUs />
      <NewReleases items={data.new_chpters} />
      <Advert />
      <Announcement announcement={data.announcements} />
      <Novels items={data.novels} />
    </div>
  )
}
