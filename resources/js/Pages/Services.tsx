import Modal from "@/Components/Modal";
import ServiceContent from "@/Components/ServiceContent";
import { services, stackingProducts } from "@/constants";
import Layout from "@/Layouts/GuestLayout";
import { Service } from "@/types";
import { useState } from "react";
import { GiClick } from "react-icons/gi";
import { TbClick } from "react-icons/tb";

function Services() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [serviceActive, setServiceActive] = useState<Service>({
        id: 0,
        title: "",
        description: "",
        image: "",
        items: [],
    });

    const handleModalOpen = (service: Service) => {
        setModalOpen(true);
        setServiceActive(service);
    };

    return (
        <Layout>
            <div className="px-4 py-24 mx-auto text-center max-w-7xl">
                <h2 className="mb-6 text-3xl font-bold text-center text-primary-500">
                    Nuestros Servicios
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="overflow-hidden transition-all duration-300 ease-in-out transform border rounded-lg shadow-sm hover:scale-105 hover:shadow-xl group"
                        >
                            <div className="relative h-48">
                                <div className="h-full">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="object-cover object-center w-full h-full transition-opacity duration-300"
                                    />
                                </div>
                                <div
                                    className="absolute bottom-0 content-center w-full h-0 transition-all duration-300 cursor-pointer group-hover:h-48 bg-primary-500"
                                    onClick={() => handleModalOpen(service)}
                                >
                                    <GiClick
                                        className="hidden ml-2 text-center text-white group-hover:inline-block"
                                        size={48}
                                    />
                                    <h3 className="hidden px-8 text-lg font-bold text-emphasis-300 group-hover:block">
                                        Presiona para ver más
                                    </h3>
                                </div>
                            </div>
                            <p className="p-2 text-lg font-bold text-center text-primary-600 group-hover:text-white group-hover:bg-primary-500">
                                {service.title}
                            </p>
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
            <Modal
                show={isModalOpen}
                onClose={() => setModalOpen(false)}
                closeable={true}
            >
                <ServiceContent
                    service={serviceActive}
                    onClose={() => setModalOpen(false)}
                />
            </Modal>
        </Layout>
    );
}

export default Services;
