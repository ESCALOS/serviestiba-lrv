import { FaXmark } from "react-icons/fa6";

type Props = {
    service: {
        title: string;
        description: string;
    };
    onClose: () => void;
};

function ServiceContent({ service: { title, description }, onClose }: Props) {
    return (
        <div className="relative p-8 bg-white rounded-lg shadow-md">
            <FaXmark
                className="absolute cursor-pointer top-4 right-4 text-primary-500 hover:text-primary-600"
                onClick={onClose}
            />
            <h2 className="mb-4 text-3xl font-bold text-center text-primary-900">
                {title}
            </h2>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    );
}

export default ServiceContent;
