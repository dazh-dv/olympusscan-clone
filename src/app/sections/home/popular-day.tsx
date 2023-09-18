import { CardSquare } from "@/components/cards";
import Section from "@/components/section";
import { TypeSeriePopular_Novel } from "@/types/series";

export default function PopularDay({ items }:{ items: Array<TypeSeriePopular_Novel>}) {
  return(
    <Section title="Popular Del Dia" description="Las series más populares de la actualidad.">
      <div className="snap-x snap-mandatory overflow-x-auto flex items-center gap-1 md:gap-4 px-1 md:px-0 pb-4">
        {items.map(item => <CardSquare key={item.id} large={true} item={item} /> )}
      </div>
    </Section>
  )
}