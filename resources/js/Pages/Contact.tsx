import Layout from "@/Layouts/GuestLayout";
import ContactForm from "@/Sections/ContactForm";
import { BiEnvelope, BiPhoneCall } from "react-icons/bi";

function Contact() {
    return (
        <Layout title="Contactenos">
            <div className="grid grid-cols-1 gap-8 px-4 mx-auto py-36 max-w-7xl md:grid-cols-2">
                <div className="flex flex-col justify-center gap-8 mx-auto md:max-w-96">
                    <h1 className="text-4xl font-semibold text-primary-900">
                        Estamos en Contacto
                    </h1>
                    <p>
                        Escríbenos por cualquiera de nuestros medios para
                        solicitar más información y poder atenderte.
                    </p>
                    <div>
                        <h3 className="mb-4 font-bold text-primary-900">
                            Central de pedidos
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <BiEnvelope
                                    size={24}
                                    className="text-secondary-500"
                                />
                                <a
                                    href="mailto:consultas@serviestiba.pe"
                                    className="font-light text-primary-900"
                                >
                                    Correo: consultas@serviestiba.pe
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <BiPhoneCall
                                    size={24}
                                    className="text-secondary-500"
                                />
                                <a
                                    href="tel:+51 989 220 092"
                                    className="font-light text-primary-900"
                                >
                                    Whatsapp: 989 220 092
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mx-auto md:max-w-96">
                    <h3 className="mb-4 text-xl text-primary-900">
                        Escríbenos para recibir más información:
                    </h3>
                    <ContactForm />
                </div>
            </div>
        </Layout>
    );
}

export default Contact;
