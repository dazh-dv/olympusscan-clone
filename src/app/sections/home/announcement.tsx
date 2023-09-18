import { ArrowRight, MegaphoneOutline } from "@/components/icons";
import Section from "@/components/section";
import calculateTimeDiff from "@/helpers/calculateTimeDiff";
import { AnnouncementHomeType } from "@/types/announcements";
import Link from "next/link";

export default function Announcement({ announcement }:{ announcement: AnnouncementHomeType }) {

  return(
    <Section
      title="Aviso"
      description="Último anuncio publicado."
      header={{
        to: '/',
        label: 'archive announcements',
        icon: (<ArrowRight className="md:h-[30px] md:w-[30px] h-6 w-6" />)
      }}
      >
        <article className="flex bg-gray-800 rounded-md p-4 gap-4 mx-1 md:mx-0">
          <div className="text-3xl text-amber-300">
            <MegaphoneOutline className="w-[30px] h-[30px]" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg leading-4">{announcement.title}</div>
            <time dateTime={announcement.created_at} className="text-xs text-gray-400 capitalize">{calculateTimeDiff(announcement.created_at)?.time}</time>
            <div className="text-sm font-light text-gray-300">
              <p className="line-clamp-3">{announcement.content}</p>
              <Link href="/anuncios" className="text-amber-300 inline-flex items-center gap-[3px]">
                <span>Lee mas </span>
                <ArrowRight className="w-[18px] h-[18px]" />
              </Link>
            </div>
          </div>
        </article>
    </Section>
  )
}