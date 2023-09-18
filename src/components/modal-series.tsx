'use client'
import Modal from "@/components/modal";
import useWindows from "@/hooks/use-windows";
import { MagnifyingGlass } from "@/components/icons";

export function ModalSeries() {

  const { seriesModal, setSeriesModal } = useWindows()
  
  return(
    <Modal show={seriesModal} setShow={() => setSeriesModal((v: boolean) => false)}>
      <div className="bg-gray-800/80 backdrop-blur rounded-xl w-full max-w-96">
        <div className="bg-gray-900/10 p-4 rounded-t-xl shadow-xl">
          <div>
            <div className="relative w-full text-slate-400 focus-within:!text-slate-50 transition-color rounded-xl bg-gray-700 border border-gray-600">
            <input id="657" placeholder="Buscar" type="search" className="text-sm rounded-xl block w-full pl-12 p-2.5 h-full bg-transparent outline-none" />
            <div className="absolute inset-y-0 left-0 flex pl-3 pt-2.1 pointer-events-none text-2xl">
              <MagnifyingGlass className="w-6 h-6" />
            </div>
          </div>
          </div>
        </div>
        <div className="p-4 h-100 overflow-y-scroll overflow-x-hidden">
          <div className="p-8 text-gray-500 text-center font-light flex-center flex-col">
            <MagnifyingGlass className="h-6 w-6" />
            <div className="mt-2 max-w-48">No hay resultados</div>
          </div>
        </div>
      </div>
    </Modal>
  )
}