import { Button } from "@/components/ui/button"
import {
  Card,
  CardFooter
} from "@/components/ui/card"
import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

type ImagemProps = {
  src: string;
  alt: string;
};

export function Itens({src, alt}: ImagemProps) {
  return (
    <>
      <Card className="relative mx-auto w-full max-w-sm pt-0">
          <div className="absolute " />
          <img
            src={src}
            alt={alt}
            className="relative aspect-video w-full object-cover" />
          <CardFooter>
            <Link className="w-full" href="/item"><Button className="w-full">Mais Informações</Button></Link>
          </CardFooter>
        </Card>
    </>
  )
}