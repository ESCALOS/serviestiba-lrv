import { mainServices } from "@/constants";

function Services() {
    return (
        <section className="bg-emphasis-500 py-36 scroll-m-24 lg:scroll-m-32">
            <div className="px-4 mx-auto text-center max-w-7xl">
                <h2 className="mb-8 text-3xl font-bold text-gray-800">
                    Nuestros <br /> Campos de Trabajo
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {mainServices.map(({ id, icon, title, description }) => (
                        <div
                            className="p-6 bg-white rounded-lg shadow-md"
                            key={id}
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="p-4 bg-gray-100 rounded-full">
                                    <img
                                        loading="lazy"
                                        src={icon}
                                        alt={title}
                                        width={48}
                                        height={48}
                                    />
                                </div>
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-gray-800">
                                {title}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
