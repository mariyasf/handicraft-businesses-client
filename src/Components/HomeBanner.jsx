import React from 'react';
import b1 from "/Images/1.png"
import b2 from "/Images/2.png"
import b3 from "/Images/3.png"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'react-lazy-load-image-component/src/effects/blur.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HomeBanner = () => {
    return (
        <div className='pt-20'>
            <Swiper
                className="w-full"
                
                centeredSlides={true}
                autoplay={{
                    delay: 60000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

            >
                <SwiperSlide className='w-full h-full'>
                    <LazyLoadImage
                        src={b1}
                        alt="Banner 1"
                        effect="opacity"
                        className="w-full h-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <LazyLoadImage
                        src={b2}
                        alt="Banner 2"
                        effect="opacity"
                        className="w-full h-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <LazyLoadImage
                        src={b3}
                        alt="Banner 3"
                        effect="opacity"

                        className="w-full h-full"
                    />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default HomeBanner;