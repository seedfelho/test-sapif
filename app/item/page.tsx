import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Inter } from "next/font/google";

type ImagemProps = {
  src: string;
  alt: string;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Item({src, alt}: ImagemProps){
    return(
        <>
            
            <div className="flex justify-center items-center h-screen">
                <img 
                src={src} 
                alt={alt}
                className="aspect-video rounded-xl size-90"
                />
                <section className="flex flex-col gap-4 p-4 pt-0">
                    
                    <h1>TEXTO DA DESCRIÇÃO</h1>
                    <Button className={`${inter.className} font-semibold bg-cyan-700`} asChild><Link href="./ondeRetirar" >Onde Retirar</Link></Button>
                </section>
            </div>
        </>
    )
}