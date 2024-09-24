import PhotoSwipeVideo from "@/Components/PhotoSwipeVideo";
import Layout from "@/Layouts/GuestLayout";

function WhistleblowingChannel() {
    return (
        <Layout title="Canal de denuncias">
            <div className="px-4 py-12 mx-auto max-w-7xl">
                <h2 className="text-4xl font-bold text-primary-500">
                    Canal de denuncias
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex flex-col items-center justify-center h-full gap-4 py-8 lg:max-w-lg lg:items-start">
                        <h1 className="text-xl font-bold">
                            Para interponer una denuncia referente al Sistema de
                            Gestión de Prevención de Delitos (ISO 37001)
                        </h1>
                        <p className="text-justify">
                            En Farmex S.A. trabajamos por ofrecer el mejor
                            servicio, siempre bajo un Código Ético y de
                            Conducta.
                        </p>
                        <p className="text-justify">
                            Con el objetivo de detectar irregularidades
                            relacionadas con la compañía hemos creado el Canal
                            de Denuncias independiente a Farmex S.A.
                        </p>
                        <p className="text-justify">
                            Animamos a empleados, clientes o cualquier persona
                            que tenga contacto con nuestros servicios a que se
                            comunique con nosotros y nos haga llegar sus
                            sugerencias.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default WhistleblowingChannel;
