import { services, stackingProducts } from "@/constants";
import Layout from "@/Layouts/GuestLayout";

function Services() {
    return (
        <Layout>
            <div className="px-4 py-24 mx-auto text-center max-w-7xl">
                <h2 className="mb-6 text-3xl font-bold text-center text-primary-500">
                    Nuestros Servicios
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                    {services.map(({ id, image, title }) => (
                        <div
                            key={id}
                            className="relative overflow-hidden transition-all duration-300 ease-in-out transform border rounded-lg shadow-sm hover:scale-105 hover:shadow-xl group"
                        >
                            <div className="h-48">
                                <img
                                    src={image}
                                    alt={title}
                                    className="object-cover object-center w-full h-full transition-opacity duration-300"
                                />
                            </div>
                            <div className="absolute bottom-0 content-center w-full h-0 transition-all duration-300 group-hover:h-48 bg-primary-500">
                                <h3 className="text-lg font-bold text-emphasis-300">
                                    {title}
                                </h3>
                            </div>
                        </div>
                    ))}
                    <div className="transition-colors duration-300 border shadow-sm md:col-span-2 lg:col-span-3 bg-primary-100 hover:bg-primary-200">
                        <div className="flex flex-col space-y-1.5 p-6 bg-primary-500 text-emphasis-100 rounded-lg">
                            <h2 className="text-xl font-bold tracking-tight whitespace-nowrap">
                                ESTIBA Y DESESTIBA DE PRODUCTOS
                            </h2>
                            <div className="p-6">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                                    {stackingProducts.map((product, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center p-4 transition-colors duration-300 rounded-lg bg-primary-200 hover:bg-primary-300"
                                        >
                                            <div className="relative w-16 h-16">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="object-cover object-center w-full h-full p-2 transition-opacity duration-300"
                                                />
                                            </div>
                                            <span className="font-medium text-center text-primary-800">
                                                {product.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Services;
