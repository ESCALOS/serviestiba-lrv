import Layout from "@/Layouts/GuestLayout";

function SocialResponsability() {
    return (
        <Layout title="Responsabilidad Social">
            <div className="relative flex flex-wrap">
                <div className="bg-[#edeae2] flex-col items-center lg:h-[600px] lg:w-1/2 lg:rounded-br-3xl text-gray-900 leading-7 z-10 text-justify relative flex justify-center">
                    <div className="flex flex-col items-center justify-center h-full gap-6 px-8 py-12 lg:max-w-lg lg:items-start">
                        <h1 className="text-4xl font-bold">
                            Responsabilidad Social
                        </h1>
                        <p className="text-sm">
                            En Serviestiba nos preocupamos por el correcto uso
                            de nuestros productos, la disposición final de sus
                            envases y el desarrollo de los agricultores y sus
                            familias. Por ello, hemos unido fuerzas con
                            diferentes entidades para aportar, de manera
                            responsable y consciente, a mejorar los distintos
                            problemas que existen en el sector agrícola y en sus
                            grupos de interés.
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
        </Layout>
    );
}

export default SocialResponsability;
