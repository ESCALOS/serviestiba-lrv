import { BiEnvelope, BiMapPin, BiPhone } from "react-icons/bi";
import {
    BsFacebook,
    BsInstagram,
    BsLinkedin,
    BsWhatsapp,
    BsYoutube,
} from "react-icons/bs";

function Footer() {
    return (
        <footer>
            <div className="flex flex-wrap items-start px-4 py-12 space-y-8 bg-primary-500 justify-evenly md:space-y-0">
                <div className="px-4 max-w-96">
                    <img
                        src="/images/logo.webp"
                        className="h-16 brightness-[5]"
                        alt="logo"
                    />
                    <p className="py-4 space-y-2 text-white text-pretty">
                        Realizamos operaciones con excelencia y seguridad,
                        innovando e implementando nuevas tecnologías a través de
                        un equipo de personas altamente calificado y
                        comprometido con nuestros clientes y comunidades.
                    </p>
                </div>
                <div className="px-4">
                    <h2 className="mb-4 text-2xl font-bold text-white">
                        Contáctanos
                    </h2>
                    <div className="py-4 space-y-6">
                        <div className="flex items-center text-left">
                            <BiPhone size={24} fill="white" />
                            <a
                                href="tel:+51993470363"
                                className="ml-2 text-white"
                            >
                                +51 993 470 363
                            </a>
                        </div>
                        <div className="flex items-center text-left">
                            <BiPhone size={24} fill="white" />
                            <a
                                href="tel:+51947284351"
                                className="ml-2 text-white"
                            >
                                +51 947 284 351
                            </a>
                        </div>
                        <div className="flex items-center text-left">
                            <BiEnvelope size={24} fill="white" />
                            <a
                                href="mailto:informes@serviestiba.pe"
                                className="ml-2 text-white"
                            >
                                informes@serviestiba.pe
                            </a>
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <h2 className="text-2xl font-bold text-white">Síguenos</h2>
                    <div className="flex items-start gap-4 py-4">
                        <a
                            href="https://www.facebook.com/ServiEstiba"
                            target="_blank"
                        >
                            <BsFacebook size={36} color="white" />
                        </a>
                        <a
                            href="https://www.instagram.com/serviestiba.pe/"
                            target="_blank"
                        >
                            <BsInstagram size={36} color="white" />
                        </a>
                        <a href="https://wa.link/5raa8c" target="_blank">
                            <BsWhatsapp size={36} color="white" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="py-6 bg-primary-700">
                <p className="px-4 text-xl font-bold text-center text-white">
                    ©2024. Serviestiba S.A.C. | RUC: Desconocido
                </p>
            </div>
        </footer>
    );
}

export default Footer;
