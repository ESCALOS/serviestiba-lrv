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
        content: SuggestionForm as ModalComponent,
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
        image: "/images/slider/se-slider.webp",
        alt: "Serviestiba",
        title: "Estiba y desestiba de mercancias",
    },
    {
        id: 2,
        image: "/images/slider/banner-coragensc-100ml-3.webp",
        alt: "Coragensc 100ml",
        title: "Coragensc 100ml",
    },
    {
        id: 3,
        image: "/images/slider/banner-roundup-10lt-4.webp",
        alt: "Roundup 10lt",
        title: "Roundup 10lt",
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
        icon: "/images/main-services/logistic.png",
        title: "Paletizado de Productos",
        description:
            "Paletizado seguro y eficiente para optimizar transporte y almacenamiento.",
    },
    {
        id: 2,
        icon: "/images/main-services/estiba.webp",
        title: "Estiba y desestiba especializada",
        description:
            "Nos adecuamos a requerimientos especiales, con seguridad y flexibilidad.",
    },
    {
        id: 3,
        icon: "/images/main-services/cleaning.png",
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

export const purpose = [
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
    {
        id: 3,
        image: "/images/about/mission.jpg",
        title: "Valores",
        description:
            "Eficiencia, Calidad, Innovación, Seguridad y Salud, Confianza y Mejora Continua.",
    },
];

export const timelineData = [
    {
        year: 2010,
        image: "/images/about.jpg",
        description: "Se funda Serviestiba el 27 de agosto",
    },
    {
        year: 2014,
        image: "/images/irapay1.webp",
        description:
            "Iniciamos operaciones en diversos almacenes, ampliando nuestra presencia y servicios",
    },
    {
        year: 2018,
        image: "/images/irapay2.webp",
        description:
            "Nos especializamos en estiba y desestiba en diversas modalidades, adaptándonos a las necesidades del mercado.",
    },
    {
        year: 2022,
        image: "/images/irapay3.webp",
        description:
            "Comenzamos a generar valor con soluciones especializadas e integrales.",
    },
    {
        year: 2024,
        image: "/images/irapay1.webp",
        description:
            "Nos consolidamos como líderes en el sector, ofreciendo soluciones integrales y ganando reconocimiento a nivel nacional por nuestra excelencia y compromiso.",
    },
];

export const services = [
    {
        id: 1,
        image: "/images/irapay1.webp",
        title: "Limpieza de Pallets",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
    {
        id: 2,
        image: "/images/irapay2.webp",
        title: "Trasegado de Materia Prima",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
    {
        id: 3,
        image: "/images/irapay3.webp",
        title: "Reproceso de Materia Prima",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
    {
        id: 4,
        image: "/images/irapay1.webp",
        title: "Apoyo en Almacén",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
    {
        id: 5,
        image: "/images/irapay2.webp",
        title: "Reembolsado de Productos",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
    {
        id: 6,
        image: "/images/irapay3.webp",
        title: "Paletizado de Productos",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
    {
        id: 7,
        image: "/images/irapay1.webp",
        title: "Traspale de Productos",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
    {
        id: 8,
        image: "/images/irapay2.webp",
        title: "Descarga de Glucosa a Silo",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
    {
        id: 9,
        image: "/images/irapay3.webp",
        title: "Vaciado de Materia Prima a Silo",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
    {
        id: 10,
        image: "/images/irapay1.webp",
        title: "Arrumado de Productos",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
    {
        id: 11,
        image: "/images/irapay2.webp",
        title: "Operador de Estoca Eléctrica",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
    {
        id: 12,
        image: "/images/irapay3.webp",
        title: "Operador de Montacargas",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
    {
        id: 13,
        image: "/images/irapay1.webp",
        title: "Reparto de Productos",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
    {
        id: 14,
        image: "/images/irapay2.webp",
        title: "Etiquetado de Productos",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
    {
        id: 15,
        image: "/images/irapay3.webp",
        title: "Ensunchado de Productos",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
    {
        id: 16,
        image: "/images/irapay1.webp",
        title: "Llenado, Pesado, Cocido y Paletizado de Productos",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
    {
        id: 17,
        image: "/images/irapay2.webp",
        title: "Picking de Productos",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
    {
        id: 18,
        image: "/images/irapay3.webp",
        title: "Packing de Productos",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        items: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime unde corrupti provident eaque praesentium dolor, sunt amet quibusdam perferendis deleniti, harum nisi aperiam aliquam quasi. Eum soluta veritatis iste.",
        ],
    },
];

export const stackingProducts = [
    { id: 1, name: "CAJAS", image: "/images/stats/servicios.webp" },
    { id: 2, name: "SACOS", image: "/images/stats/servicios.webp" },
    { id: 3, name: "CILINDROS", image: "/images/stats/servicios.webp" },
    { id: 4, name: "PRODUCTOS MATPEL", image: "/images/stats/servicios.webp" },
    { id: 5, name: "ROLLOS DE TELA", image: "/images/stats/servicios.webp" },
];
