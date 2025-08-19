import Image from "next/image";


interface PropsClientCard {
    title: string;
    description: string;
    image: string;
}

export default function ClientsCard({ title, description, image }: PropsClientCard) {
    return (
        <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200 overflow-hidden">
            
            <div className="relative w-full h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
                <Image
                    src={image}
                    alt={title}
                    className="object-contain transition-all duration-300 ease-in-out group-hover:scale-110"
                    fill={true}
                />
                
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-all duration-300"></div>
            </div>

    
            <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    {description}
                </p>
            </div>

            {/* Indicador de hover */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
    );
}