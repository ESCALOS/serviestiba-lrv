// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { clients } from '@/constants'

type Props = {}

function ClientList({ }: Props) {
    return (
<div className='px-4 pt-20 mx-auto text-center max-w-7xl'>
<h2 className="mb-2 text-3xl font-bold text-gray-800">
Confían en nosotros
    </h2>
    <h3 className='mb-2 text-2xl text-gray-800'>
    Seguimos llevando parte de la logística de su empresa a otro nivel
    </h3>
    <div className='flex justify-center'><div className='w-24 mt-4 border-b border-gray-300'></div></div>
        <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            className='custom-swiper'
        >
            {
                clients.map(({ id, name }) =>
                    <SwiperSlide key={id} className='flex items-center justify-center text-center bg-white'>
                        <img
                            src={`/images/clients/${name}.webp`}
                            alt={name}
                            style={{
                                display: 'inline-block',
                                textAlign: 'center',
                                maxHeight: '300px',
                                paddingTop: '3rem',
                                paddingBottom: '3rem'
                            }}
                            loading='lazy'
                             />
                    </SwiperSlide>
                )
            }
        </Swiper>
        </div>
    )
}

export default ClientList
