import { Link } from "@inertiajs/react";
import { BiEnvelope } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

function Footer() {
    return (
        <footer className="px-4 py-8 bg-primary-700 md:px-8">
            <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
                <div className="flex flex-col">
                    <img
                        src="/images/logo.webp"
                        alt="logo"
                        className="mb-4 w-52 brightness-[8]"
                    />
                    <p className="text-gray-300">
                        Realizamos operaciones con excelencia y seguridad,
                        innovando e implementando nuevas tecnologías a través de
                        un equipo de personas altamente calificado y
                        comprometido con nuestros clientes y comunidades
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 text-lg font-semibold text-gray-100">
                        INFORMACIÓN
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="nosotros"
                                className="text-gray-300 hover:text-secondary-500"
                            >
                                Sobre Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-gray-300 hover:text-secondary-500"
                            >
                                Términos y condiciones
                            </Link>
                        </li>
                        <li>
                            <a
                                href="/politicas"
                                className="text-gray-300 hover:text-secondary-500"
                            >
                                Políticas de privacidad
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-lg font-semibold text-gray-100">
                        CONTACTO
                    </h3>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <LuMapPin
                                size={24}
                                className="inline-block mr-2"
                                stroke="white"
                            />
                            <span className="text-gray-300">Lima, Perú</span>
                        </li>
                        <li className="flex items-start">
                            <LuMapPin
                                size={24}
                                className="inline-block mr-2"
                                stroke="white"
                            />
                            <span className="text-gray-300">
                                Chiclayo, Perú
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">
                                <FaPhoneAlt
                                    size={20}
                                    className="inline-block"
                                    fill="white"
                                />
                            </span>
                            <span className="text-gray-300">
                                (+51) 993 470 363 - (+51) 947 284 351
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">
                                <BiEnvelope
                                    size={24}
                                    className="inline-block"
                                    fill="white"
                                />
                            </span>
                            <a
                                href="mailto:informes@serviestiba.pe"
                                className="text-gray-300 hover:text-secondary-500"
                            >
                                informes@serviestiba.pe
                            </a>
                        </li>
                    </ul>

                    <div className="flex mt-4 space-x-4">
                        <a
                            href="https://www.facebook.com/ServiEstiba"
                            className="text-white hover:text-secondary-500"
                            target="_blank"
                        >
                            <BsFacebook size={24} />
                        </a>
                        <a
                            href="https://www.instagram.com/serviestiba.pe/"
                            className="text-white hover:text-secondary-500"
                            target="_blank"
                        >
                            <BsInstagram size={24} />
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-secondary-500"
                        >
                            <BsLinkedin size={24} />
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-secondary-500"
                        >
                            <BsYoutube size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
