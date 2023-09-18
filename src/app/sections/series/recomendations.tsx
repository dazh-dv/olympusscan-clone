import { CardSquare } from "@/components/cards";
import Section from "@/components/section";
import { TypeSeriePopular_Novel } from "@/types/series";

export default function Recommendations({ title = false, items }:{ title?: boolean, items: Array<TypeSeriePopular_Novel> }){
  return(
    <Section title="Recomendadas" description="Las series favoritas del staff." >
      <div className="px-1 md:px-0">
        <div className="snap-x snap-mandatory overflow-x-auto flex items-center gap-1 md:gap-4 pb-4">
          {items.map(item => <CardSquare key={item.id} item={item} /> )}
        </div>
      </div>
    </Section>
  )
}