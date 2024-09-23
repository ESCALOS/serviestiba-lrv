import { useEffect, useState, type ReactNode } from "react";
import { navItems, topbarItems } from "@/constants";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
// import SuggestionForm from "../components/SuggestionForm"
import Modal from "@/Components/Modal";
import { Link, usePage } from "@inertiajs/react";
import { ModalComponent } from "@/types";

type TopBarProps = {
    handleOpenModal: (content: ModalComponent) => void;
    handleCloseModal: () => void;
};

type SidebarProps = {
    open: boolean;
    routePath: string;
    handleOpenModal: (content: ModalComponent) => void;
};

function TopBar({ handleOpenModal }: TopBarProps) {
    return (
        <div>
            <div
                className={`bg-white text-info-500 hidden lg:block fixed top-0 w-full z-20`}
            >
                <div className="px-4 mx-auto max-w-7xl">
                    <ul className="flex items-center justify-end h-10 gap-4 text-sm font-bold">
                        {topbarItems.map(({ id, name, content }) => (
                            <li key={id}>
                                <button
                                    onClick={() => handleOpenModal(content)}
                                    className="transition duration-300 hover:opacity-80"
                                >
                                    {name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function NavList({ routePath }: { routePath: string }) {
    return (
        <ul
            className={`lg:flex hidden justify-around gap-4 items-center font-bold text-lg text-white`}
        >
            {navItems.map(({ id, name, href }) => (
                <li key={id}>
                    <Link
                        className={`${routePath !== href ? "hover:text-secondary-500" : "text-secondary-500"}`}
                        href={href}
                    >
                        {name}
                    </Link>
                </li>
            ))}
            <li className="pl-4">
                <Link
                    className={`py-2 px-4 rounded-md text-xl text-white transition-all border hover:bg-white hover:text-primary-500`}
                    href="/intranet"
                >
                    Intranet
                </Link>
            </li>
        </ul>
    );
}

function Sidebar({ open, routePath, handleOpenModal }: SidebarProps) {
    return (
        <div className="relative lg:hidden">
            <div
                className={`fixed right-0 h-full top-24 w-full sm:w-[400px] bg-white transform ${
                    open ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out z-50`}
            >
                <ul className="flex flex-col h-full gap-8 p-8">
                    {navItems.map(({ id, name, href }) => (
                        <li key={id}>
                            <Link
                                className={`text-lg uppercase font-bold  ${routePath === href ? "text-secondary-500" : "text-primary-500 hover:text-secondary-500"}`}
                                href={href}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                    {topbarItems.map(({ id, name, content }) => (
                        <li key={id}>
                            <button
                                onClick={() => handleOpenModal(content)}
                                className={`text-lg uppercase font-bold  ${"text-primary-500 hover:text-secondary-500"}`}
                            >
                                {name}
                            </button>
                        </li>
                    ))}
                    <li className="mt-8">
                        <Link
                            className={`py-4 px-8 rounded-2xl text-lg uppercase font-bold text-primary-500 border border-primary-500 hover:text-white hover:bg-primary-500`}
                            href="/intranet"
                        >
                            Intranet
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function Navbar() {
    const [open, setOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);
    const { url: routePath } = usePage();

    const handleOpenModal = (Component: ModalComponent) => {
        setModalContent(<Component onClose={handleCloseModal} />);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setModalContent(null);
    };

    const toggleSidebar = () => {
        setOpen(!open);
    };

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 1024 && setOpen(false),
        );
    }, []);

    return (
        <header className="relative">
            <TopBar
                handleOpenModal={handleOpenModal}
                handleCloseModal={handleCloseModal}
            />
            <div className={`fixed top-0 lg:top-10 z-20 w-full bg-primary-500`}>
                <nav className="flex items-center justify-between h-24 px-4 mx-auto max-w-7xl">
                    <Link href="/">
                        <img
                            className="brightness-[8]"
                            src="/images/logo.webp"
                            alt="Logo"
                            width={200}
                        />
                    </Link>
                    <NavList routePath={routePath} />
                    {/* Botón para abrir/cerrar la sidebar */}
                    <button
                        onClick={toggleSidebar}
                        className="p-4 text-white focus:outline-none lg:hidden"
                    >
                        {open ? <FaXmark size={24} /> : <FaBars size={24} />}
                    </button>
                </nav>
            </div>
            <div className={`h-24 relative lg:h-[136px] bg-white`}></div>
            <Sidebar
                open={open}
                routePath={routePath}
                handleOpenModal={handleOpenModal}
            />
            {/* Modal */}
            <Modal
                show={isModalOpen}
                onClose={handleCloseModal}
                maxWidth="2xl"
                closeable={true}
            >
                {modalContent}
            </Modal>
        </header>
    );
}

export default Navbar;
