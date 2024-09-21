import Layout from "@/Layouts/GuestLayout";
import WorkWithUsForm from "@/Sections/WorkWithUsForm";

function WorkWithUs() {
    return (
        <Layout>
            <div className="px-4 mx-auto text-center py-36 max-w-7xl">
                <h2 className="mb-4 text-3xl font-bold text-center text-primary-500">
                    Trabaja con nosotros
                </h2>
                <p className="mb-6 text-lg text-center text-primary-500">
                    En Serviestiba agradecemos su interés por formar parte de
                    nuestro gran equipo humano.
                </p>
                <WorkWithUsForm />
            </div>
        </Layout>
    );
}

export default WorkWithUs;
