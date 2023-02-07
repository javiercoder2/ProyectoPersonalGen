import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSparkles, faAnchor } from '@fortawesome/free-solid-svg-icons'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./footer.css";

// import required modules
import { EffectCards } from "swiper";

export default function Habilidades() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><h1 className="skills"><FontAwesomeIcon icon={faHandSparkles} /> Check My Programming Skills by Swipping</h1><FontAwesomeIcon icon={faHandSparkles} /></SwiperSlide>
        <SwiperSlide>
        </SwiperSlide>
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
