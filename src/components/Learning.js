import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { faHandSparkles, faAnchor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./Learning.css";

// import required modules
import { EffectCube, Pagination } from "swiper";

export default function Learning() {
  return (
    <><>
      <div className="cube">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <div className="legend" >When a person learns whatever topic, this involves a self-explanatory and exploratory of our own ideals, problems, obstacles, egos and flaws. We endure all the previous aspects and strengthen or decrease them in order to make everything we learn into something incredible and terrific everyday. Please, check my main personal learning attitudes. Please, swipe </div>
          <FontAwesomeIcon className="icono" icon={faHandSparkles} />
          <SwiperSlide>
            <img className="images9" src="https://i.ytimg.com/vi/Os0pMkox1_c/maxresdefault.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="images9" src="https://i.ytimg.com/vi/CU6cbpZWrAg/maxresdefault.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="images9" src="https://thumbs.dreamstime.com/b/effort-word-handwritten-chalkboard-vintage-precise-stopwatch-used-o-effort-word-watch-114646951.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="images9" src="https://stjohnstfrancisbwmat.org/wp-content/uploads/sites/6/2019/01/AAEAAQAAAAAAAAjeAAAAJGJiM2IzNjQ0LTI1OGMtNDI0ZS1iMjVmLTI4OTRhOTg4ZTQzYQ-800x400.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </><></></>
  );
}

