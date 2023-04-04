import React from 'react'
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, Autoplay, A11y   } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';  
import 'swiper/css/autoplay'


// Slider products list
const Slider = ({ product, handerSlider }) => {
    const swiper = useSwiper();
    return (
        <div className="container__swiper">
            <Swiper
                loop={true}
                autoplay={ {delay : 1000}}
                modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y ]}
                slidesPerView={3}
                pagination={{ clickable: true }}
            >
                {((product.img).slice(0, 6)).map(item => {
                    return (
                       
                            <SwiperSlide>
                                <div className="section__img" onMouseEnter={() => handerSlider(item.content)}>
                                    <img className="section__img--slider" src={item.content}></img>
                                </div>
                            </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Slider