import { BsWhatsapp } from "react-icons/bs";

type Props = {};

function CallToAction({}: Props) {
    return (
        <section
            className="relative bg-cover bg-center h-[50vh] flex items-center justify-center"
            style={{ backgroundImage: "url('/images/about.jpg')" }}
        >
            <div className="w-full h-full bg-black bg-opacity-75">
                <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto text-center">
                    <h1 className="mb-4 text-4xl font-bold text-white">
                        Extend Your Home With a Beautiful Garden
                    </h1>
                    <p className="mb-8 text-white">
                        We focus on the needs sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="/contactenos"
                            className="px-6 py-2 font-semibold text-black transition bg-white rounded-md hover:bg-gray-100"
                        >
                            Contáctenos
                        </a>
                        <a
                            href={import.meta.env.PUBLIC_WHATSAPP_LINK}
                            target="_blank"
                            className="flex items-center gap-1 px-6 py-2 font-semibold text-white transition bg-green-500 rounded-md hover:bg-green-600"
                        >
                            Escríbenos
                            <BsWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;
