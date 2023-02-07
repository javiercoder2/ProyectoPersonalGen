import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSparkles } from '@fortawesome/free-solid-svg-icons'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";

export default function Habilidades2() {
  return (
    <>
      <Swiper
        effect={"cards"} 
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><FontAwesomeIcon icon={faHandSparkles} /><h1 className="skills">Check My Soft Skills by Swipping</h1><FontAwesomeIcon icon={faHandSparkles} /></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </>
  );
}