// import Swiper core and required modules
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { FaFilePdf } from "react-icons/fa6";

type Props = {
    title: string;
    itemTitle: string;
    items: {
        id: number;
        name: string;
    }[];
    filesLocation: string;
};

function DocumentSlider({ title, itemTitle, items, filesLocation }: Props) {
    return (
        <div className="max-w-full px-4 py-20 mx-auto lg:max-w-md md:max-w-xl xl:max-w-2xl">
            <h2 className="mb-12 text-3xl font-bold text-center text-primary-700">
                {title}
            </h2>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1460: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                className="custom-swiper"
            >
                {items.map(({ id, name }) => (
                    <SwiperSlide
                        key={id}
                        className="flex items-center justify-center text-center bg-white"
                    >
                        <div className="relative group">
                            <img
                                src={`/images/${filesLocation}/${name}.webp`}
                                alt={`${name} - Serviestiba`}
                                className="h-[200px] object-cover w-full"
                                loading="lazy"
                            />
                            <div className="absolute top-0 flex-col items-center justify-center hidden w-full h-full gap-4 transition-all duration-300 bg-white bg-opacity-50 group-hover:flex">
                                <a
                                    href={`/pdf/${filesLocation}/${name}.pdf`}
                                    target="_blank"
                                    className="inline-block w-full px-4 py-2 font-bold text-white rounded-lg bg-primary-500 max-w-52"
                                >
                                    Ver {itemTitle}
                                </a>
                                <a
                                    href={`/pdf/${filesLocation}/${name}.pdf`}
                                    target="_blank"
                                    download
                                    className="flex items-center justify-center w-full gap-2 px-4 py-2 font-bold text-white rounded-lg bg-primary-500 max-w-52"
                                >
                                    <FaFilePdf />
                                    Descargar
                                </a>
                            </div>
                        </div>
                        <p className="w-full pt-8 mx-auto text-sm text-center capitalize max-w-52 text-primary-900">
                            {name.replaceAll("_", " ")}
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default DocumentSlider;
