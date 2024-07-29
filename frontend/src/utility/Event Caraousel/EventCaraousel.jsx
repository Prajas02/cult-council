import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./EventCaraousel.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function EventCaraousel() {
  const img = [
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
  ];
  const borderColorArray = ['white', 'cyan', 'yellow','crimson', 'lightseagreen','deeppink','orange', 'springgreen', 'fuchsia', 'gold', 'lime', 'ghostwhite']
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
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
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
          img.map((image,i)=>(
            <SwiperSlide key={i}>
          <div style={{border:`2px solid ${borderColorArray[i%img.length]}`}} className="slider-card">
            <img src={image} alt="" />
            <div className="card-info">
              <h1 style={{color:`${borderColorArray[i%img.length]}`}}>Sthapana Divas</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur simus hic voluptatum,
                quidem nulla nostrum?
              </p>
              <div className="bottom-link">
                <p style={{color:`${borderColorArray[i%img.length]}`}}>by Cultural Secretary</p>
                <div className="links">
                  <a href="">insta</a>
                  <a href="">fb</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
