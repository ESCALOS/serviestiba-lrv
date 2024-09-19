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
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            className="w-full custom-swiper"
        >
            {sliderItems.map(({ id, image, alt }) => (
                <SwiperSlide key={id}>
                    <img
                        src={image}
                        alt={alt}
                        className="w-full min-h-96 object-cover max-h-[750px]"
                        loading="eager"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slider;
