import { FaXmark } from "react-icons/fa6";

type Props = {
    onClose: () => void;
};
function SocialResponsibility({ onClose }: Props) {
    return (
        <div className="relative p-8">
            <FaXmark
                className="absolute top-4 right-4 text-primary-500 hover:text-primary-600 cursor-pointer"
                onClick={onClose}
            />
            <img src="/images/logo.webp" alt="Responsabilidad Social" />
            <p>Texto sobre responsabilidad social...</p>
        </div>
    );
}

export default SocialResponsibility;
