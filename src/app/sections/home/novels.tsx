import { CardSquare } from "@/components/cards";
import Section from "@/components/section";
import { TypeSeriePopular_Novel } from "@/types/series";

export default function Novels({ items }:{ items: Array<TypeSeriePopular_Novel> }) {
  return(
    <Section title="Novelas" description="Fantásticos libros para leer.">
      <div className="snap-x snap-mandatory overflow-x-auto flex items-center gap-1 md:gap-4 px-1 md:px-0 pb-4">
        {items.map(item => <CardSquare key={item.id} large item={item} />)}
      </div>
    </Section>
  )
}