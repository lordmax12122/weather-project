import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import styles from "./photoGallery.css";

const images = [
  "/images/photo1.png",
  "/images/photo2.png",
  "/images/photo3.png",
  "/images/photo4.png",
  "/images/photo5.png",
];

export default function PhotoGallery() {
  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        navigation
        loop={true}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={20}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        className="mySwiper"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`Slide ${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
