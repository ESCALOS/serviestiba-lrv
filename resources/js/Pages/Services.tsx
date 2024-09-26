import Modal from "@/Components/Modal";
import ServiceCard from "@/Components/ServiceCard";
import ServiceContent from "@/Components/ServiceContent";
import { services } from "@/constants";
import Layout from "@/Layouts/GuestLayout";
import StackingProductsSlider from "@/Sections/StackingProductsSlider";
import { Service } from "@/types";
import { useState } from "react";

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
        <Layout title="Nuestros Servicios">
            <div className="px-4 py-24 mx-auto text-center max-w-7xl">
                <h2 className="mb-6 text-3xl font-bold text-center text-primary-500">
                    Nuestros Servicios
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            onClick={handleModalOpen}
                        />
                    ))}
                    <div className="transition-colors duration-300 border shadow-sm md:col-span-2 lg:col-span-3 bg-primary-100 hover:bg-primary-200">
                        <div className="flex flex-col space-y-1.5 p-6 bg-primary-500 text-emphasis-100 rounded-lg">
                            <h2 className="text-xl font-bold tracking-tight whitespace-nowrap">
                                ESTIBA Y DESESTIBA DE PRODUCTOS
                            </h2>
                            <div className="p-6">
                                <StackingProductsSlider />
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
