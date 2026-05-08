import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ImagemProps = {
  src: string;
   alt: string;
};

export function Itens({src, alt}: ImagemProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute "/>
      <img
        src={src}
        alt={alt}
        className="relative aspect-video w-full object-cover"
      />
      <CardFooter>
        <Button className="w-full">Mais Informações</Button>
      </CardFooter>
    </Card>
  )
}




// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
// });
// type ImagemProps = {
//   src: string;
//   alt: string;
// };

// export function Itens({src, alt}: ImagemProps){
//     return(
//         <section className="flex flex-col items-center justify-center rounded-xl size-100 gap-1 bg-muted/50">
//             <img 
//             src={src} 
//             alt={alt}
//             className="aspect-video rounded-xl size-75 "
//             />
//             <Button className={`${inter.className} font-semibold bg-cyan-700`} asChild><Link href="/item" >Detalhes</Link></Button>
//         </section>
//     )
// }