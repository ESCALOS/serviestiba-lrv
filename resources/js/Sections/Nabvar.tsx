import { useEffect, useState } from "react";
import { navItems } from "@/constants";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import Modal from "@/Components/Modal";
import { Link, usePage } from "@inertiajs/react";
import { ModalComponent } from "@/types";
import SuggestionForm from "./SuggestionForm";

type TopBarProps = {
    scrolled: boolean;
    isHome: boolean;
    handleOpenModal: (content: ModalComponent) => void;
};

type NavListProps = {
    routePath: string;
    scrolled: boolean;
};

type SidebarProps = {
    open: boolean;
    routePath: string;
    handleOpenModal: (content: ModalComponent) => void;
};

function TopBar({ scrolled, isHome, handleOpenModal }: TopBarProps) {
    return (
        <div>
            <div
                className={`${isHome ? (scrolled ? "bg-white text-info-500" : "bg-black bg-opacity-50 text-white") : "bg-white text-info-500"}  hidden lg:block fixed top-0 w-full z-20`}
            >
                <div className="px-4 mx-auto max-w-7xl">
                    <ul className="flex items-center justify-end h-10 gap-4 text-sm font-bold">
                        <li>
                            <Link
                                href="/responsabilidad-social"
                                className="transition duration-300 hover:opacity-80"
                            >
                                Responsabilidad Social
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/canal-de-denuncias"
                                className="transition duration-300 hover:opacity-80"
                            >
                                Canal de denuncias
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => handleOpenModal(SuggestionForm)}
                                className="transition duration-300 hover:opacity-80"
                            >
                                Buzón de sugerencias
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function NavList({ routePath, scrolled }: NavListProps) {
    const isHome = routePath === "/";
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
                <a
                    className={`py-2 px-4 rounded-md text-xl transition-all border ${isHome ? (scrolled ? "hover:bg-white hover:text-primary-500 text-white" : "bg-primary-500 border border-primary-500 text-white hover:bg-opacity-90") : "hover:bg-white hover:text-primary-500 text-white"}`}
                    href="https://www.google.com"
                    target="_blank"
                >
                    Intranet
                </a>
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
                    <li>
                        <Link
                            href="/responsabilidad-social"
                            className={`text-lg uppercase font-bold  ${routePath === "/responsabilidad-social" ? "text-secondary-500" : "text-primary-500 hover:text-secondary-500"}`}
                        >
                            Responsabilidad Social
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/canal-de-denuncias"
                            className={`text-lg uppercase font-bold  ${routePath === "/canal-de-denuncias" ? "text-secondary-500" : "text-primary-500 hover:text-secondary-500"}`}
                        >
                            Canal de denuncias
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={() => handleOpenModal(SuggestionForm)}
                            className={`text-lg uppercase font-bold  ${"text-primary-500 hover:text-secondary-500"}`}
                        >
                            Buzón de sugerencias
                        </button>
                    </li>

                    <li className="mt-8">
                        <a
                            className={`py-4 px-8 rounded-2xl text-lg uppercase font-bold text-primary-500 border border-primary-500 hover:text-white hover:bg-primary-500`}
                            href="https://www.google.com"
                            target="_blank"
                        >
                            Intranet
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);
    const { url: routePath } = usePage();
    const isHome = routePath === "/";

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

    useEffect(() => {
        if (routePath === "/") {
            const handleScroll = () => {
                setScrolled(window.scrollY > 20);
            };

            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [routePath]);

    return (
        <header className="relative">
            <TopBar
                scrolled={scrolled}
                handleOpenModal={handleOpenModal}
                isHome={isHome}
            />
            <div
                className={`fixed top-0 lg:top-10 z-20 w-full ${isHome ? (scrolled ? "bg-primary-500" : "bg-transparent backdrop-blur-md") : "bg-primary-500"}`}
            >
                <nav className="flex items-center justify-between h-24 px-4 mx-auto max-w-7xl">
                    <Link href="/">
                        <img
                            className={`${isHome ? (scrolled ? "brightness-[8]" : "lg:brightness-[8]") : "brightness-[8]"}`}
                            src="/images/logo.webp"
                            alt="Logo"
                            width={200}
                        />
                    </Link>
                    <NavList routePath={routePath} scrolled={scrolled} />
                    {/* Botón para abrir/cerrar la sidebar */}
                    <button
                        onClick={toggleSidebar}
                        className={`p-4 focus:outline-none lg:hidden ${isHome ? (scrolled ? "text-white" : "text-primary-500") : "text-white"}`}
                    >
                        {open ? <FaXmark size={24} /> : <FaBars size={24} />}
                    </button>
                </nav>
            </div>
            <div
                className={`h-24 relative bg-white ${routePath === "/" ? "lg:h-0" : "lg:h-[136px]"}`}
            ></div>
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
