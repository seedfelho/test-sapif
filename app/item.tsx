type ImagemProps = {
  src: string;
  alt: string;
};

export default function Item({src, alt}: ImagemProps){
    return(
        <>
            <img 
            src={src} 
            alt={alt}
            className="aspect-video rounded-xl size-90"
            />
            <section>
                //descricão item 
            </section>
        </>
    )
}