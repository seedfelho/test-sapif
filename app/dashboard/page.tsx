import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Itens } from "@/components/ui/itens"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex w-full max-w-sm gap-2">
            <Input type="search" placeholder="Buscar..." />
            </div>
          <></>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <Itens src="https://t3.ftcdn.net/jpg/02/56/82/22/240_F_256822296_SIHqcWDO7jZEVxGfy8xQGKWBZBKn9yzR.jpg" alt="primeira imagem"/>
            <Itens src="https://t3.ftcdn.net/jpg/02/98/00/02/240_F_298000277_BGQ5Xde9HKvc3aRji8PoBHWV14RDBxxC.jpg" alt="primeira imagem"/>
            <Itens src="https://t4.ftcdn.net/jpg/02/82/75/31/240_F_282753146_V6ZHcruFiIauT4ecZyf9a2J066LD2K9N.jpg" alt="primeira imagem"/>
            <Itens src="https://t4.ftcdn.net/jpg/07/01/57/17/240_F_701571731_Ygf3PIUHzRoP9OHvpSznr2YnbtiOWj8I.jpg"alt="primeira imagem"/>
            <Itens src="https://t4.ftcdn.net/jpg/03/23/82/99/240_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg"alt="primeira imagem"/>
            <Itens src="https://t4.ftcdn.net/jpg/03/23/82/99/240_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg"alt="primeira imagem"/>
            <Itens src="https://t4.ftcdn.net/jpg/03/23/82/99/240_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg"alt="primeira imagem"/>
            <Itens src="https://t4.ftcdn.net/jpg/03/23/82/99/240_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg"alt="primeira imagem"/>
            <Itens src="https://t4.ftcdn.net/jpg/03/23/82/99/240_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg"alt="primeira imagem"/>
            <Itens src="https://t4.ftcdn.net/jpg/03/23/82/99/240_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg"alt="primeira imagem"/>
            <Itens src="https://t4.ftcdn.net/jpg/03/23/82/99/240_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg"alt="primeira imagem"/>
            <Itens src="https://t4.ftcdn.net/jpg/03/23/82/99/240_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg"alt="primeira imagem"/>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
