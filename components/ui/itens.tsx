import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
type ImagemProps = {
  src: string;
  alt: string;
};

export function Itens({src, alt}: ImagemProps){
    return(
        <section className="flex flex-col items-center justify-center rounded-xl size-100 gap-1 bg-cyan-800">
            <img 
            src={src} 
            alt={alt}
            className="aspect-video rounded-xl size-75 "
            />
            <Button className={`${inter.className} font-semibold bg-cyan-700`} asChild><Link href="/item" >Detalhes</Link></Button>
        </section>
    )
}