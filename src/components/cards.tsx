'use client'

import LazyImage, { Image } from "@/components/lazy-image";
import Link from "next/link";
import { Calendar, Fire } from "@/components/icons";
import { type Route } from "next";
import { TypeSerieFilter, TypeSerieNewChapter, TypeSeriePopular_Novel } from "@/types/series";
import calculateTimeDiff from "@/helpers/calculateTimeDiff";

// function random(arr) {
//   return arr[(Math.floor(Math.random() * arr.length))];
// }

const slug = 'solo-leveling'


function LinkCard({ href, className = "", children }:{ href: Route<string> | URL, className?: string, children: React.ReactNode}){
  return(
    <Link href={href} className="rounded-md h-full w-full">
      {children}
    </Link>
  )
}

export function CardSquare ({ large = false, className = "", item, }:{ large?: boolean, className?: string, item: TypeSeriePopular_Novel }) {

  return (
    <figure className={`relative overflow-hidden rounded-md object-center snap-start min-w-[244px] w-[244px] ${className}`}>
      <LinkCard href={('/series/' + item.slug) as Route} className="block">
        <div className={`relative w-full rounded-md ${!large ? 'aspect-square' : 'aspect-[2.75/4.75]'}`}>
          <Image
            srcset={item.cover_srcset}
            alt={item.name}
            className="object-cover rounded-inherit w-full h-full"
          />
        </div>
      </LinkCard>
      <div className="pointer-events-none absolute -bottom-2 left-0 w-full h-2/4 bg-gradient-to-b from-transparent via-gray-800/70 to-gray-800/90 rounded-md" />
      <div className="absolute-b-left w-full py-2 px-1 md:px-2 rounded-[inherit] text-center flex flex-col gap-2">
        <LinkCard href={('/series/' + item.slug) as Route}>
          <figcaption className="font-header text-lg md:text-xl leading-5 line-clamp-3">{item.name}</figcaption>
        </LinkCard>
        <div className="flex-center gap-1 md:gap-2">
          <div className="text-sm font-header h-8 bg-emerald-400/25 backdrop-blur flex-center px-3 rounded-lg capitalize">{item.status.name}</div>
        </div>
      </div>
    </figure>
  )
}

export function CardRectangular ({ item, className = "" }:{ item: TypeSerieFilter , className?: string }) {

  return (
    <figure className={"relative overflow-hidden rounded-md " + className}>
      <LinkCard href={('/series/' + item.slug) as Route} className="block">
        <div className="relative w-full rounded-md aspect-[2.75/4.75]">
          <Image srcset={item.cover_srcset} alt={item.name} className="object-cover rounded-[inherit] w-full h-full" />
        </div>
      </LinkCard>
      <div className="pointer-events-none absolute -bottom-2 left-0 w-full h-2/4 bg-gradient-to-b from-transparent via-gray-800/70 to-gray-800/90 rounded-md" />
      <div className="absolute-b-left w-full py-2 px-1 md:px-2 rounded-[inherit] text-center flex flex-col gap-2">
        <LinkCard href={('/series/' + item.slug) as Route}>
          <figcaption className="font-header text-lg md:text-xl leading-5 line-clamp-3">{item.name}</figcaption>
        </LinkCard>
        <div className="flex-center gap-1 md:gap-2">
          <div className="text-sm font-header h-8 bg-slate-500/70 backdrop-blur px-3 flex-center rounded-lg bg-slate-300">{`${item.chapter_count} ${item.chapter_count === 1 ? ' Capitulo' : 'Capitulos'}`}</div>
          {item.status && <div className="text-sm font-header h-8 bg-teal-700/50 backdrop-blur flex-center px-3 rounded-lg capitalize">{item.status.name}</div>}
        </div>
      </div>
    </figure>
  )  
}

export function CardChapter({ className = "", by, ...props }:{ className?: string, by?:string }) {

  return (
    <Link href={('/chapter/' + slug) as Route} {...props} className={"group flex items-center gap-4 hover:bg-neutral-700/25 px-4 py-1 rounded-full transition-background-color border-neutral-700 border-1 backdrop-blur-sm " + className}>
      <div id="indicator" className="w-2 aspect-square rounded-full bg-neutral-300" />
      <div className="w-full flex-between">
        <div>
          <div id="name" className="text-sm text-gray-200 group-hover:text-white"> Capítulo&nbsp;7</div>
          {by && <div className="text-xs text-gray-400 leading-3">{by}</div>}
        </div>
        <div className="text-xs text-gray-400 flex-center gap-1 whitespace-nowrap">
          <Calendar className="w-3 h-3" />
          <time dateTime="2023-08-27T06:05:48.000000Z" className="first-letter:capitalize">hace 17 Min.</time>
        </div>
      </div>
    </Link>
  )
}

export function CardUpdateList() {
  return (
    <div className="bg-neutral-800 p-4 rounded-xl relative">
      <div className="absolute left-0 top-0 h-full pointer-events-none">
        <div className="relative h-full aspect-[2.75/4.75] opacity-10">
          <div className="relative h-full rounded-l-xl">
            <LazyImage src="https://dashboard.olympusv2.gg/storage/comics/covers/1022/1otZsWHHP-lg.webp" alt="Iniciando con el Registro del Cuerpo Sagrado de la Antigüedad" className="object-cover rounded-[inherit] w-full h-full min-h-[initial]"/>
          </div>
          <div className="bg-gradient-to-l from-gray-800 via-gray-800/30 to-transparent absolute inset-0" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link href={('/series/' + slug) as Route} className="w-16 h-16 rounded-xl sf-ripple-container">
          <div className="relative w-full h-full rounded-xl z-10">
            <LazyImage src="https://dashboard.olympusv2.gg/storage/comics/covers/1022/1otZsWHHP-lg.webp" alt="Iniciando con el Registro del Cuerpo Sagrado de la Antigüedad" className="object-cover rounded-[inherit] w-full h-full min-h-[initial]" />
          </div>
        </Link>
        <div className="w-full">
          <Link href={('/series/' + slug) as Route} className="rounded-[inherit] w-full sf-ripple-container" title="Iniciando con el Registro del Cuerpo Sagrado de la Antigüedad" aria-label="Iniciando con el Registro del Cuerpo Sagrado de la Antigüedad">
            <figcaption className="font-header text-base md:text-xl font-medium md:font-normal line-clamp-1">Iniciando con el Registro del Cuerpo Sagrado de la Antigüedad</figcaption>
          </Link>
          <div className="w-max text-sm font-header h-5 bg-teal-700/50 backdrop-blur flex-center px-3 rounded capitalize mt-1">Activo</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <CardChapter className="h-8" />
        <CardChapter className="h-8" />
      </div>
    </div>
  )
}

export function CardUpdateRectangular({ item }:{ item: TypeSerieNewChapter }) {
  return (
    <figure className="relative rounded-md">
      <Link title={item.name} aria-label={item.name} href={('/series' + item.slug) as Route} className="block rounded-[inherit] sf-ripple-container">
        <div className="relative w-full aspect-[2.75/4.75] object-cover rounded-inherit">
          <Image alt={item.name} srcset={item.cover_srcset} className="object-cover rounded-inherit w-full h-full min-h-[inherit]" />
        </div>
      </Link>
      <div className="pointer-events-none absolute-b-left w-full h-2/4 bg-gradient-to-b from-transparent via-gray-800/70 to-gray-800/90 rounded-[inherit]" />
      <div className="absolute-b-left w-full pt-2 pb-1 px-1 rounded-[inherit] text-center flex flex-col gap-2">
        <Link href={('/series/' + item.slug) as Route} className="rounded-inherit sf-ripple-container" title={item.name} aria-label={item.name}>
          <figcaption className="font-header text-base md:text-xl font-medium md:font-normal">{item.name}</figcaption>
        </Link>
        <div className="flex gap-1 text-xs md:text-sm">
          {item.last_chapters.map(chapter => {
            const diff = calculateTimeDiff(chapter.published_at)
            return(
            <a key={chapter.id} href={(`/capitulo/${chapter.id}/${item.slug}`) as Route} className="flex items-center relative w-full rounded">
              {diff?.hot && (
                <div className="absolute inset-0 flex-center text-4xl z-10 text-rose-500">
                  <i className="i-heroicons-fire-20-solid"></i>
                </div>
              )}
              <div className="z-20 bg-gray-900/50 backdrop-blur min-h-8 rounded-md w-full">
                <div className="font-header flex-center w-full py-1"> Capítulo {chapter.name}</div>
                <div className={`flex-center rounded-b-md ${diff?.hot ? 'bg-rose-400/10 text-rose-600' : 'text-gray-400 bg-gray-900/30'} `}>
                  {diff?.hot && <Fire className="w-[14px] h-[14px] mr-1" /> }
                  <time dateTime="2023-08-28T14:05:56.000000Z" className="text-xs font-header capitalize py-0.5 flex-center" suppressHydrationWarning>{diff?.time}</time>
                </div>
              </div>
            </a>
          )})}
        </div>
      </div>
    </figure>
  )
}