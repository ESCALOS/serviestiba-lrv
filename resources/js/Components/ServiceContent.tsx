import { Service } from "@/types";
import { getURLToSendMessageToWhatsapp } from "@/utils";
import { BsWhatsapp } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";

type Props = {
    service: Service;
    onClose: () => void;
};

function ServiceContent({ service, onClose }: Props) {
    const whatsappNumber = "51924707562";
    const message = `Hola *Serviestiba* quiero más información sobre el servicio de *${service.title}*`;
    const url = getURLToSendMessageToWhatsapp({
        whatsappNumber,
        message,
    });
    return (
        <div className="relative flex flex-col items-center gap-4 p-8 bg-white rounded-lg shadow-md">
            <FaXmark
                className="absolute cursor-pointer top-4 right-4 text-primary-500 hover:text-primary-600"
                onClick={onClose}
            />
            <img src={service.image} alt="Logo" className="h-48" />
            <h2 className="text-2xl font-semibold text-center uppercase text-primary-900">
                {service.title}
            </h2>
            <p className="font-bold text-center text-gray-800">
                {service.description}
            </p>
            <ul className="text-sm text-justify text-gray-700 list-decimal list-inside">
                {service.items.map((item, index) => (
                    <li key={index} className="mb-2">
                        {item}
                    </li>
                ))}
            </ul>

            <a
                href={url}
                target="_blank"
                className="flex items-center gap-2 px-12 py-4 text-lg text-white transition-colors rounded-full bg-primary-500 hover:bg-primary-600"
            >
                Cotizar ahora
                <BsWhatsapp color="white" size={20} />
            </a>
        </div>
    );
}

export default ServiceContent;
