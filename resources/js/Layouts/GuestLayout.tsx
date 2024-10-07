import WhatsappBubble from "@/Components/WhatsappBubble";
import Footer from "@/Sections/Footer";
import Navbar from "@/Sections/Nabvar";
import { Head } from "@inertiajs/react";

type Props = {
    children: React.ReactNode;
    title?: string;
    withWhatsappBubble?: boolean;
};

export default function Layout({
    children,
    title = "Inicio",
    withWhatsappBubble = true,
}: Props) {
    return (
        <>
            {withWhatsappBubble && <WhatsappBubble />}
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <main className="max-w-[1920px] mx-auto">{children}</main>
            <Footer />
        </>
    );
}
