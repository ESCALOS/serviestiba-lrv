import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { stackingProducts } from "@/constants";

function StackingProductsSlider() {
    const stackingProductsSlides = [...stackingProducts, ...stackingProducts];
    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            className="custom-swiper"
        >
            {stackingProductsSlides.map(({ name, image }, index) => (
                <SwiperSlide
                    key={index}
                    className="flex flex-col items-center p-4 transition-colors duration-300 rounded-lg bg-primary-200 hover:bg-primary-300"
                >
                    <div className="relative w-16 h-16 mx-auto">
                        <img
                            src={image}
                            alt={name}
                            className="object-cover object-center w-full h-full p-2 transition-opacity duration-300"
                        />
                    </div>
                    <span className="font-medium text-center text-primary-800">
                        {name}
                    </span>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default StackingProductsSlider;
