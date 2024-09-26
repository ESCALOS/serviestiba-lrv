import Layout from "@/Layouts/GuestLayout";

function SocialResponsability() {
    return (
        <Layout title="Responsabilidad Social">
            <div className="relative flex flex-wrap">
                <div className="bg-[#edeae2] flex-col items-center lg:h-[600px] lg:w-1/2 lg:rounded-br-3xl text-primary-700 leading-7 z-10 text-justify relative flex justify-center">
                    <div className="flex flex-col items-center justify-center h-full gap-6 px-8 py-12 lg:max-w-lg lg:items-start">
                        <h1 className="text-4xl font-bold">
                            Responsabilidad Social
                        </h1>
                        <p className="text-justify">
                            En Serviestiba estamos comprometidos con la
                            sostenibilidad y el cuidado del medio ambiente.
                            Ofrecemos soluciones responsables a nuestros
                            clientes, ayudándoles en el reciclaje de residuos
                            sólidos. En nuestras oficinas administrativas,
                            promovemos la reducción del uso de papel
                            reutilizando hojas para darles un segundo uso,
                            conscientes de la importancia de preservar los
                            recursos naturales. Además, nos hemos aliado con
                            centros de reciclaje sin fines de lucro, como
                            Anikem, para contribuir activamente al bienestar
                            ambiental y social.
                        </p>
                    </div>
                </div>
                <img
                    src="/images/about.webp"
                    alt="ServiEstiba"
                    className="absolute right-0 object-cover h-[600px] w-3/4 hidden lg:block"
                    loading="eager"
                />
            </div>
            <div className="px-8 py-24 mx-auto space-y-24 max-w-7xl">
                <div>
                    <div className="mb-16 lg:max-w-md">
                        <h2 className="mb-8 text-3xl font-bold text-center lg:text-left text-primary-700">
                            Campo Limpio
                        </h2>
                        <p className="text-sm text-justify text-primary-700">
                            Campo Limpio es un gremio que gestiona de manera
                            integral y responsable los envases de productos para
                            la protección y productividad de cultivos agrícolas,
                            cuidando la salud humana, animal y el medio
                            ambiente; por eso, nos hemos unimos a ellos para
                            impulsar su difusión y labor.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-16 lg:gap-4 lg:grid-cols-2">
                        <img
                            src="/images/about.webp"
                            alt="ServiEstiba"
                            className="object-cover w-full h-64"
                        />
                        <img
                            src="/images/about.webp"
                            alt="ServiEstiba"
                            className="object-cover w-full h-64"
                        />
                    </div>
                </div>
                <div className="grid items-center grid-cols-1 gap-16 lg:gap-4 lg:grid-cols-2">
                    <div className="lg:max-w-md">
                        <h2 className="mb-8 text-3xl font-bold text-center lg:text-left text-primary-700">
                            ¿Por qué es importante?
                        </h2>
                        <p className="text-sm text-justify text-primary-700">
                            Manejar de manera responsable los envases vacíos de
                            protección de cultivos ayuda a proteger la salud
                            humana, animal y cuidar el medio ambiente. Estos
                            envases deben ser triplemente lavados, perforados y
                            entregados en los centros de acopio autorizados.
                        </p>
                    </div>
                    <img
                        src="/images/about.webp"
                        alt="ServiEstiba"
                        className="object-cover w-full h-64"
                    />
                </div>
            </div>
        </Layout>
    );
}

export default SocialResponsability;
