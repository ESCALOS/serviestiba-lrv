import PhotoSwipeVideo from "@/Components/PhotoSwipeVideo";

export default function MainAbout() {
    return (
        <div className="relative flex flex-wrap">
            <div className="bg-[#edeae2] flex-col items-center lg:h-[600px] lg:w-1/2 lg:rounded-br-3xl text-gray-900 leading-7 z-10 text-justify relative flex justify-center">
                <div className="flex flex-col items-center justify-center h-full gap-6 px-8 py-12 lg:max-w-lg lg:items-start">
                    <h1 className="text-4xl font-bold">Sobre Nosotros</h1>
                    <p className="text-sm">
                        En SERVIESTIBA, la eficiencia en nuestros servicios es
                        una preocupación constante para el buen funcionamiento
                        de su empresa o cualquier tipo de apoyo que se requiere
                        ya sean de carácter Industrial, Comercial, de
                        dimensiones pequeñas, grandes y hasta muy grandes
                        (operatividad).
                    </p>
                    <p className="text-sm">
                        Para llegar a este nivel desarrollamos un plan de
                        trabajo a la medida de las necesidades del cliente,
                        nuestro servicio especializado de Estiba y desestiba,
                        permitirá menor tiempo en sus operaciones así como
                        seguimiento y medición del impacto de nuestros servicios
                        en procesos de su empresa, garantizado por un efectivo
                        sistema de supervisión y colaboradores calificados.
                    </p>
                    <PhotoSwipeVideo />
                </div>
            </div>
            <img
                src="/images/about.webp"
                alt="ServiEstiba"
                className="absolute right-0 object-cover h-[600px] w-3/4 hidden lg:block"
                loading="eager"
            />
        </div>
    );
}
