import AboutBox from "@/Components/AboutBox";
import DocumentSlider from "@/Components/DocumentSlider";
import { certifications, policies } from "@/constants";
import Layout from "@/Layouts/GuestLayout";
import MainAbout from "@/Sections/MainAbout";
import Stats from "@/Sections/Stats";
import Timeline from "@/Sections/Timeline";

function About() {
    return (
        <Layout title="Nosotros">
            <MainAbout />
            <Timeline />
            <Stats />
            <DocumentSlider
                title="Certificaciones"
                items={certifications}
                itemTitle="Certificación"
                filesLocation="certifications"
            />
            <DocumentSlider
                title="Políticas de Privacidad"
                items={policies}
                itemTitle="Política"
                filesLocation="policies"
            />
            {/* Mision y Visión */}
            <div className="grid xl:grid-cols-2">
                <AboutBox
                    image="/images/about/mission.jpg"
                    title="Misión"
                    description="La eficiencia en nuestros servicios es una preocupación constante para el buen funcionamiento de su empresa o cualquier tipo de apoyo que se requiere ya sean de carácter Industrial, Comercial, de dimensiones pequeñas, grandes y hasta muy grandes (operatividad)."
                />
                <AboutBox
                    image="/images/about/vision.png"
                    title="Visión"
                    description="Para llegar a este nivel desarrollamos un plan de trabajo a la medida de las necesidades del cliente, nuestro servicio especializado de Estiba y desestiba, permitirá menor tiempo en sus operaciones así como seguimiento y medición del impacto de nuestros servicios en procesos de su empresa, garantizado por un efectivo sistema de supervisión y colaboradores calificados."
                    inverted
                />
            </div>
        </Layout>
    );
}

export default About;
