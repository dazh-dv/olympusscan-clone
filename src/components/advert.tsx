export default function Advert ({ content, className, ...props }:{ content?: string, className?: string }) {
  return (
    <div className={"min-h-14 bg-gray-700 rounded-xl relative adsense " + className} {...props}>
      <div className="absolute left-5 top-5 text-gray-900 text-xs rounded-xl bg-amber-400 px-3 font-bold pointer-events-none"> AD</div>
    </div>
  )
}