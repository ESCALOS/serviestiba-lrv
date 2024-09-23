import AboutBox from "@/Components/AboutBox";
import DocumentSlider from "@/Components/DocumentSlider";
import { certifications, policies, purpose } from "@/constants";
import Layout from "@/Layouts/GuestLayout";
import MainAbout from "@/Sections/MainAbout";
import Stats from "@/Sections/Stats";
import Timeline from "@/Sections/Timeline";

function About() {
    return (
        <Layout title="Nosotros">
            <MainAbout />
            <Timeline />
            {/* Mision y Visión */}
            <div className="grid xl:grid-cols-3">
                {purpose.map(({ id, image, title, description }, index) => (
                    <AboutBox
                        key={id}
                        image={image}
                        title={title}
                        description={description}
                        inverted={index % 2 !== 0}
                    />
                ))}
            </div>
            <Stats />
            <div className="grid grid-cols-1 lg:grid-cols-2">
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
            </div>{" "}
        </Layout>
    );
}

export default About;
