import Layout from "@/Layouts/GuestLayout";
import WorkWithUsForm from "@/Sections/WorkWithUsForm";

function WorkWithUs() {
    return (
        <Layout title="Trabaja con nosotros">
            <div
                className="flex flex-col items-center justify-center px-4 py-24 mx-auto text-center"
                style={{
                    backgroundImage: "url(/images/work-with-us-bg.webp)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="max-w-2xl p-8 bg-white border shadow-md bg-opacity-85 border-primary-500 rounded-3xl">
                    <h2 className="mb-4 text-3xl font-bold text-center text-primary-500">
                        Trabaja con nosotros
                    </h2>
                    <p className="mb-6 text-lg text-center text-primary-500">
                        En Serviestiba agradecemos su interés por formar parte
                        de nuestro gran equipo humano.
                    </p>
                    <WorkWithUsForm />
                </div>
            </div>
        </Layout>
    );
}

export default WorkWithUs;
