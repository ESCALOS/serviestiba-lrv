function WhatDoWeDo() {
    return (
        <div className="bg-white scroll-m-24 lg:scroll-m-32" id="nosotros">
            <div className="px-4 py-24 mx-auto max-w-7xl">
                <div className="flex flex-wrap justify-center">
                    <div className="order-2 w-full lg:w-1/2 lg:order-1">
                        <div className="relative min-h-[450px] h-full max-w-[450px] m-auto">
                            <img
                                src="/images/what-do-we-do/1.webp"
                                width={450}
                                height={709}
                                alt="Estiba y desestiba de mercancías"
                                className="absolute top-0 left-0 w-3/5 rounded-lg h-5/6"
                                loading="eager"
                            />
                            <img
                                src="/images/what-do-we-do/2.webp"
                                width={450}
                                height={709}
                                alt="Estiba y desestiba de mercancías"
                                className="absolute bottom-0 right-0 w-3/5 rounded-lg h-5/6"
                                loading="eager"
                            />
                        </div>
                    </div>
                    <div className="content-center order-1 p-4 mb-8 space-y-8 lg:w-1/2 lg:order-2 lg:mt-0">
                        <h2 className="text-4xl font-semibold text-gray-900 lg:text-5xl">
                            ¿Qué Hacemos?
                        </h2>
                        <p className="text-lg text-justify text-gray-700">
                            En SERVIESTIBA, la eficiencia en nuestros servicios
                            es una preocupación constante para el buen
                            funcionamiento de su empresa o cualquier tipo de
                            apoyo que se requiere ya sean de carácter
                            Industrial, Comercial, de dimensiones pequeñas,
                            grandes y hasta muy grandes (operatividad).
                        </p>
                        <p className="text-lg text-justify text-gray-700">
                            Para llegar a este nivel desarrollamos un plan de
                            trabajo a la medida de las necesidades del cliente,
                            nuestro servicio especializado de Estiba y
                            desestiba, permitirá menor tiempo en sus operaciones
                            así como seguimiento y medición del impacto de
                            nuestros servicios en procesos de su empresa,
                            garantizado por un efectivo sistema de supervisión y
                            colaboradores calificados.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatDoWeDo;
