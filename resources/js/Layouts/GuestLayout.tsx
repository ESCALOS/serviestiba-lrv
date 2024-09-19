import WhatsappBubble from "@/Components/WhatsappBubble";
import Footer from "@/Sections/Footer";
import Navbar from "@/Sections/Nabvar";
import { Head } from "@inertiajs/react";

type Props = {
    children: React.ReactNode;
    title?: string;
};

export default function Layout({ children, title = "Inicio" }: Props) {
    return (
        <>
            <WhatsappBubble />
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <main className="max-w-[1920px] mx-auto">
                {children}
            </main>
            <Footer />
        </>
    );
}
