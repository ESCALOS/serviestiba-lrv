import { Service } from "@/types";
import { GiClick } from "react-icons/gi";

type Props = {
    service: Service;
    onClick: (service: Service) => void;
};

function ServiceCard({ service, onClick }: Props) {
    return (
        <div
            key={service.id}
            className="overflow-hidden transition-all duration-300 ease-in-out transform border rounded-lg shadow-sm hover:scale-105 hover:shadow-xl group"
        >
            <div className="relative h-48">
                <div className="h-full">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover object-center w-full h-full transition-opacity duration-300"
                    />
                </div>
                <div
                    className="absolute bottom-0 content-center w-full h-0 transition-all duration-300 cursor-pointer group-hover:h-48 bg-primary-500"
                    onClick={() => onClick(service)}
                >
                    <GiClick
                        className="hidden ml-2 text-center text-white group-hover:inline-block"
                        size={48}
                    />
                    <h3 className="hidden px-8 text-lg font-bold text-emphasis-300 group-hover:block">
                        Presiona para ver más
                    </h3>
                </div>
            </div>
            <p className="p-2 text-lg font-bold text-center text-primary-600 group-hover:text-white group-hover:bg-primary-500">
                {service.title}
            </p>
        </div>
    );
}

export default ServiceCard;
