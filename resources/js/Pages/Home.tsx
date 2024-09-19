import Layout from "@/Layouts/GuestLayout";
import CallToAction from "@/Sections/CallToAction";
import ClientList from "@/Sections/ClientList";
import Services from "@/Sections/Services";
import Slider from "@/Sections/Slider";
import Stats from "@/Sections/Stats";
import WhatDoWeDo from "@/Sections/WhatDoWeDo";

function Home() {
    return (
        <Layout>
            <Slider />
            <WhatDoWeDo />
            <Stats />
            <CallToAction />
            <Services />
            <ClientList />
        </Layout>
    );
}

export default Home;
