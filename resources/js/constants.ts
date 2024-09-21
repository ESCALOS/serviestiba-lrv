import SocialResponsibility from "./Sections/SocialResponsibility";
import SuggestionForm from "./Sections/SuggestionForm";
import { ModalComponent } from "./types";

export const SITE_TITLE = "Serviestiba – Estiba y Desestiba de Mercancias";

export const SITE_DESCRIPTION =
    "Descrube a los mejores estibadores de América Latina";

export const topbarItems = [
    {
        id: 1,
        name: "Responsabilidad Social",
        content: SocialResponsibility as ModalComponent,
    },
    {
        id: 2,
        name: "Canal de denuncias",
        content: SocialResponsibility as ModalComponent,
    },
    {
        id: 3,
        name: "Buzón de sugerencias",
        content: SuggestionForm as ModalComponent,
    },
];

export const sliderItems = [
    {
        id: 1,
        image: "/images/slider/banner-coragensc-4lt-1.jpg",
        alt: "Coragensc 4lt",
    },
    {
        id: 2,
        image: "/images/slider/banner-coragensc-100ml-3.jpg",
        alt: "Coragensc 100ml",
    },
    {
        id: 3,
        image: "/images/slider/banner-roundup-10lt-4.jpg",
        alt: "Roundup 10lt",
    },
];

export const navItems = [
    {
        id: 3,
        name: "Inicio",
        href: "/",
    },
    {
        id: 4,
        name: "Nosotros",
        href: "/nosotros",
    },
    {
        id: 5,
        name: "Servicios",
        href: "/servicios",
    },
    {
        id: 6,
        name: "Contáctenos",
        href: "/contactenos",
    },
    {
        id: 7,
        name: "Trabaja con Nososotros",
        href: "/trabaja-con-nosotros",
    },
];

export const mainServices = [
    {
        id: 1,
        icon: "/images/stats/servicios.webp",
        title: "Carga y Descarga de Mercancías",
        description: "Servicios de carga y descarga de mercancías.",
    },
    {
        id: 2,
        icon: "/images/stats/servicios.webp",
        title: "Estiba y desestiba especializada",
        description:
            "Nos adecuamos a requerimientos especiales, con seguridad y flexibilidad.",
    },
    {
        id: 3,
        icon: "/images/stats/servicios.webp",
        title: "Limpieza industrial",
        description:
            "Brindamos servicios de limpieza industrial Almacenes, Centros Comerciales, Plantas Industriales, Obras concluidas y más.",
    },
];

export const clients = [
    { id: 1, name: "anita" },
    { id: 2, name: "cogorno" },
    { id: 3, name: "contugas" },
    { id: 4, name: "em" },
    { id: 5, name: "hartrodt" },
    { id: 6, name: "molitalia" },
    { id: 7, name: "nestle" },
    { id: 8, name: "ruttasac" },
    { id: 9, name: "santacatalina" },
    { id: 10, name: "tcli" },
    { id: 11, name: "transpesa" },
];

export const certifications = [
    {
        id: 1,
        name: "Certificado_de_Homologación_Servicios_Generales_Famtru_S.A.C",
    },
    { id: 2, name: "CertificadoGenerado_SERVICIOS_GENERALES_FAMTRU_S.A.C" },
    {
        id: 3,
        name: "Certificado_de_Homologación_Servicios_Generales_Famtru_S.A.C",
    },
    { id: 4, name: "CertificadoGenerado_SERVICIOS_GENERALES_FAMTRU_S.A.C" },
];

export const policies = [
    { id: 1, name: "POLITICA_DE_DATOS_PERSONALES" },
    { id: 2, name: "SIG-SSOMA-POL-001-POLITICA_DE_SST_1" },
    { id: 3, name: "SIG-SSOMA-POL-001-POLITICA_DE_SST_1H" },
    { id: 4, name: "POLITICA_DE_DATOS_PERSONALES" },
    { id: 5, name: "SIG-SSOMA-POL-001-POLITICA_DE_SST_1" },
    { id: 6, name: "SIG-SSOMA-POL-001-POLITICA_DE_SST_1H" },
];

export const missionVision = [
    {
        id: 1,
        image: "/images/about/mission.jpg",
        title: "Misión",
        description:
            "La eficiencia en nuestros servicios es una preocupación constante para el buen funcionamiento de su empresa o cualquier tipo de apoyo que se requiere ya sean de carácter Industrial, Comercial, de dimensiones pequeñas, grandes y hasta muy grandes (operatividad).",
    },
    {
        id: 2,
        image: "/images/about/vision.png",
        title: "Visión",
        description:
            "Para llegar a este nivel desarrollamos un plan de trabajo a la medida de las necesidades del cliente, nuestro servicio especializado de Estiba y desestiba, permitirá menor tiempo en sus operaciones así como seguimiento y medición del impacto de nuestros servicios en procesos de su empresa, garantizado por un efectivo sistema de supervisión y colaboradores calificados.",
    },
];

export const timelineData = [
    {
        year: 2010,
        image: "/images/about.jpg",
        description: "Evento importante en 2010",
    },
    {
        year: 2014,
        image: "/images/irapay1.png",
        description: "Hito alcanzado en 2014",
    },
    {
        year: 2018,
        image: "/images/irapay2.png",
        description: "Desarrollo significativo en 2018",
    },
    {
        year: 2022,
        image: "/images/irapay3.png",
        description: "Logro destacado en 2022",
    },
    {
        year: 2024,
        image: "/images/irapay1.png",
        description: "Expansión en 2024",
    },
];

export const services = [
    {
        id: 1,
        image: "/images/irapay1.png",
        title: "Limpieza de Pallets",
    },
    {
        id: 2,
        image: "/images/irapay1.png",
        title: "Trasegado de Materia Prima",
    },
    {
        id: 3,
        image: "/images/irapay1.png",
        title: "Reproceso de Materia Prima",
    },
    {
        id: 4,
        image: "/images/irapay1.png",
        title: "Apoyo en Almacén",
    },
    {
        id: 5,
        image: "/images/irapay1.png",
        title: "Reembolsado de Productos",
    },
    {
        id: 6,
        image: "/images/irapay1.png",
        title: "Paletizado de Productos",
    },
    {
        id: 7,
        image: "/images/irapay1.png",
        title: "Traspale de Productos",
    },
    {
        id: 8,
        image: "/images/irapay1.png",
        title: "Descarga de Glucosa a Silo",
    },
    {
        id: 9,
        image: "/images/irapay1.png",
        title: "Vaciado de Materia Prima a Silo",
    },
    {
        id: 10,
        image: "/images/irapay1.png",
        title: "Arrumado de Productos",
    },
    {
        id: 11,
        image: "/images/irapay1.png",
        title: "Operador de Estoca Eléctrica",
    },
    {
        id: 12,
        image: "/images/irapay1.png",
        title: "Operador de Montacargas",
    },
    {
        id: 13,
        image: "/images/irapay1.png",
        title: "Reparto de Productos",
    },
    {
        id: 14,
        image: "/images/irapay1.png",
        title: "Etiquetado de Productos",
    },
    {
        id: 15,
        image: "/images/irapay1.png",
        title: "Ensunchado de Productos",
    },
    {
        id: 16,
        image: "/images/irapay1.png",
        title: "Llenado, Pesado, Cocido y Paletizado de Productos",
    },
    {
        id: 17,
        image: "/images/irapay1.png",
        title: "Picking de Productos",
    },
    {
        id: 18,
        image: "/images/irapay1.png",
        title: "Packing de Productos",
    },
];

export const stackingProducts = [
    { id: 1, name: "CAJAS", image: "/images/stats/servicios.webp" },
    { id: 2, name: "SACOS", image: "/images/stats/servicios.webp" },
    { id: 3, name: "CILINDROS", image: "/images/stats/servicios.webp" },
    { id: 4, name: "PRODUCTOS MATPEL", image: "/images/stats/servicios.webp" },
    { id: 5, name: "ROLLOS DE TELA", image: "/images/stats/servicios.webp" },
];
