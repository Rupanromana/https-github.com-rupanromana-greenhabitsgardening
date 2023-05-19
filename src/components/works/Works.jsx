import './works.scss'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import one from './images/1.png';
import two from './images/2.JPG';
import three from './images/3.PNG';
import four from './images/4.PNG';
import five from './images/5.PNG';
import six from './images/6.jpeg';
import seven from './images/7.jpg';



// import required modules
import { Autoplay,EffectCoverflow, Pagination } from "swiper";

export default function () {
  return(

    
    <div className="work">
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={one} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={four} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={five}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={six} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={seven} />
        </SwiperSlide>
      </Swiper>
    </>
  <div className="work">
      <div className='work_container'>
          <div className='main'>
              <h1>SOME OF OUR PROUD WORKS</h1>
          </div>
          <p className='para'><b> <br/>Gardening Inspiration at Your Fingertips Immerse yourself in the beauty of gardens with our curated collection of stunning plant and garden photos. Get inspired by different styles, plant combinations, and seasonal landscapes to fuel your creativity and design the garden of your dreams.</b>
          </p>
      </div>
    </div>
</div>
    
)
}
  

    
  
        
      
   