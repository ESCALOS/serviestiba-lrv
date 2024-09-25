import CardWhistleBlowing from "@/Components/CardWhistleBlowing";
import Modal from "@/Components/Modal";
import { whistleBlowing } from "@/constants";
import Layout from "@/Layouts/GuestLayout";
import WhistleblowingForm from "@/Sections/WhistleblowingForm";
import { useState } from "react";

function WhistleblowingChannel() {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };
    return (
        <Layout title="Canal de denuncias">
            <div className="px-4 py-12 mx-auto max-w-7xl">
                <h1 className="mb-8 text-4xl font-bold text-center text-primary-700 lg:text-left">
                    Canal de denuncias
                </h1>
                {whistleBlowing.map((whistleBlowing, index) => (
                    <CardWhistleBlowing
                        key={index}
                        {...whistleBlowing}
                        inverted={index % 2 !== 0}
                        onClick={handleModalOpen}
                    />
                ))}
            </div>
            <Modal
                show={isModalOpen}
                onClose={handleModalClose}
                maxWidth="2xl"
                closeable={false}
            >
                <WhistleblowingForm onClose={handleModalClose} />
            </Modal>
        </Layout>
    );
}

export default WhistleblowingChannel;
