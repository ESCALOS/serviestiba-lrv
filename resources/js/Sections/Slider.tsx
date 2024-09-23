import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { sliderItems } from "@/constants";

function Slider() {
    return (
        <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            pagination={{ clickable: true }}
            loop={true}
            className="w-full custom-swiper"
        >
            {sliderItems.map(({ id, image, alt }) => (
                <SwiperSlide key={id}>
                    <img
                        src={image}
                        alt={alt}
                        className="object-cover w-full min-h-96 max-h-[75vh]"
                        loading="eager"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slider;
