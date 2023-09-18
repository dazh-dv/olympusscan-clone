import DrawerSeries from "@/components/drawer-series"
import { Footer } from "@/components/footer"
import Header from "@/components/header"

export const metadata = {
  title:  {
    template: '%s | Olympuss - Clone',
    default: 'Olympuss - Clone',
  },
}

export default function CommonLayout({ children }:{ children: React.ReactNode}) {
  return(
    <>
      <Header />
      <main className="container mx-auto relative z-10">
        {children}
      </main>
      <Footer />
      <DrawerSeries />
    </>
  )
}