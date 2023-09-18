export default function Input ({ placeholder, type, icon, id, error }:{
  placeholder: string,
  type: string,
  icon: React.ReactElement,
  id: string,
  error: string | any
}) {
  return (
    <div>
      <label className="sr-only" htmlFor={id}>{placeholder}</label>
      <div className="relative w-full text-gray-500 focus-within:text-slate-50 transition rounded-xl bg-gray-700 border border-neutral-600">
        <input id={id} name={id} placeholder={placeholder} type={type} className="text-sm rounded-xl block w-full pl-12 p-2.5 h-full bg-transparent outline-none" />
        <div className="h-96 max-h-0 transition-max-height bg-gray-800/25">
          { error && <div className="first-letter:capitalize text-rose-400/70 font-medium text-xs px-4 py-1 w-full">{ error }</div>}
        </div>
        <div className="absolute inset-y-0 left-0 flex pl-3 pt-2.1 pointer-events-none text-2xl">
          {icon}
        </div>
      </div>
    </div>
  )
}