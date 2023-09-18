'use client'
import Drawer from "@/components/drawer";
import useWindows from "@/hooks/use-windows";
import { ButtonIcon } from "./button";
import { AdjustmentsHorizontal, Check, XMark } from "@/components/icons";

function FieldSet({ title, children }:{ title: string, children: React.ReactNode }) {
  return(
    <fieldset className="transition-[border-color] ease-[cubic-bezier(.4,0,0.2,1)] duration-[0.15s] border-2 border-transparent border-dashed">
      <legend className="w-full h-10 flex items-center justify-between text-lg leading-7 font-medium mb-2">
        {title}
      </legend>
      <div className="grid grid-cols-3 gap-2 p-1">
        {children}
      </div>
    </fieldset>
  )
}

interface InputRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string,
  title: string,
  value: string,
  name: string
}

export const InputRadio = ({ id, title, ...props }:InputRadioProps) => {

  return (
    <>
      <input
        {...props}
        id={id}
        type="radio"
        className="absolute opacity-0 [&:checked+label]:!bg-neutral-900 [&:checked+label]:!text-gray-100"
      />
      <label
        htmlFor={id}
        className="block w-full cursor-pointer select-none text-center text-sm leading-5 text-gray-400 hover:text-white transition-all ease-[cubic-bezier(.4,0,0.2,1)] duration-[0.15s] p-2 rounded-md"
      >
        {title}
      </label>
    </>
  );
};

export default function DrawerSeries(){
  const { drawerSeries, setDrawerSeries } = useWindows()

  const category: any[] = []

  return(
    <Drawer isOpen={drawerSeries} close={()=> setDrawerSeries(false)}>
      <header className="flex-between w-full h-11">
        <div className="flex items-center gap-4">
          <ButtonIcon
            onClick={() => setDrawerSeries(false)}
            className="text-2xl w-11 aspect-square bg-neutral-800 text-gray-200 flex-center md:pointer-events-none"
          >
              <>
                <XMark className="h-[30px] w-[30px] md:hidden" />
                <AdjustmentsHorizontal className="h-[30px] w-[30px] hidden md:block" />
              </>
          </ButtonIcon>
          <div className="text-lg md:text-2xl font-bold line-clamp-1">Opciones de filtrado</div>
        </div>
        <div>
          <ButtonIcon
            className="w-12 aspect-square bg-emerald-400 hover:bg-emerald-400/80 text-gray-900 rounded-full text-3xl flex-center"
          >
            <Check className="h-[30px] w-[30px]" />
          </ButtonIcon>
        </div>
      </header>
      <div className="mt-8 pb-8 overflow-y-auto overflow-x-hidden max-h-[calc(100%-44px)]">
        <div className="flex flex-col gap-6">
          <FieldSet title="Tipo">
            <InputRadio title="Comic" id="type-comic" value="comic" name="type" defaultChecked={true} />
            <InputRadio title="Novela" id="type-novela" value="novela" name="type" />
          </FieldSet>
          <FieldSet title="Genero">
            <InputRadio title="Todos" id="gnr-all" value="all" name="gender" defaultChecked={true} />
            {category.map(item => (
              <InputRadio key={item.id} title={item.category} id={`gnr-${item.id}`} value={item.id} name="gender" />
            ))}
          </FieldSet>
        </div>
      </div>
    </Drawer>
  )
}