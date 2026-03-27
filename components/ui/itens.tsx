import { Button } from "./button";

type ImagemProps = {
  src: string;
  alt: string;
};

export function Itens({src, alt}: ImagemProps){
    return(
        <section className="flex flex-col items-center justify-center rounded-xl size-100 gap-1">
            <img 
            src={src} 
            alt={alt}
            className="aspect-video rounded-xl size-90"
            />
            <Button variant="secondary" className="border-black bg-blue-600">Detalhes</Button>
        </section>
    )
}