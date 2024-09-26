import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { sliderItems } from "@/constants";
import { BsWhatsapp } from "react-icons/bs";

function Slider() {
    return (
        <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            pagination={{ clickable: true }}
            loop={true}
            className="w-full custom-swiper"
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            {sliderItems.map(({ id, image, alt, title }) => (
                <SwiperSlide key={id} className="relative">
                    <img
                        src={image}
                        alt={alt}
                        className="object-cover w-full min-h-96 h-[75vh] max-h-[750px]"
                        loading="eager"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                    <p className="absolute bottom-0 left-0 flex flex-col items-center justify-center w-full h-full gap-4 px-8 py-16 font-bold text-center text-white">
                        <span className="block text-lg uppercase text-ligh">
                            Serviestiba – Estiba y Desestiba de Mercancias
                        </span>
                        <span className="block px-8 pb-16 text-4xl md:text-6xl">
                            {title}
                        </span>
                        <a
                            href="https://api.whatsapp.com/send?phone=51924707562&text=Hola%20*Serviestiba*%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios"
                            target="_blank"
                            className="flex items-center gap-2 px-12 py-4 text-lg text-white transition-colors rounded-full bg-primary-500 hover:bg-primary-600"
                        >
                            Contáctenos
                            <BsWhatsapp color="white" size={20} />
                        </a>
                    </p>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slider;
