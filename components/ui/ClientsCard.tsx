import Image from "next/image";

interface PropsClientCard {
    title: string;
    description: string;
    image: string;
}

export default function ClientsCard({ title, description, image }: PropsClientCard) {
    return (
        <main>
            <Image src={image} alt="Alqueria Logo" width={350} height={90} className="rounded-lg" />
            <h1 className="font-public-sans font-black" >{title}</h1>
            <p>{description}</p>
        </main>


    )
}