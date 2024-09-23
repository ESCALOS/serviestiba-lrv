import { BsWhatsapp } from "react-icons/bs";

type Props = {};

function CallToAction({}: Props) {
    return (
        <section
            className="relative flex items-center justify-center bg-cover h-[390px]"
            style={{
                backgroundImage: "url('/images/call-to-action.webp')",
                backgroundPosition: "center 35%",
            }}
        >
            <div className="w-full h-full bg-black bg-opacity-85">
                <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto text-center">
                    <h1 className="mb-4 text-4xl font-bold text-white">
                        Optimización personalizada para maximizar resultados
                    </h1>
                    <p className="mb-8 text-white">
                        Desarrollamos un plan de trabajo personalizado que
                        reduce significativamente el tiempo en sus operaciones,
                        al mismo tiempo que ofrecemos seguimiento continuo y
                        medición precisa del impacto de nuestros servicios en
                        los procesos de su empresa.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="/contactenos"
                            className="px-6 py-2 font-semibold text-black transition bg-white rounded-md hover:bg-gray-100"
                        >
                            Contáctenos
                        </a>
                        <a
                            href="https://wa.link/5raa8c"
                            rel="noreferrer"
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
