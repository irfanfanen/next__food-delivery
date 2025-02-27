"use client";

import { useState } from "react";
import Image from "next/image";
import { assets, categoriesData } from "@/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Categories() {
  const [swiperControll, setSwiperControll] = useState(null);

  return (
    <section className="categories">
      <h2 className="categories__title">
        Browser Our Category <br />{" "}
        <span className="categories__title--primary">Receipt</span>
      </h2>
      <Swiper
        loop={true}
        slidesPerView={1.5}
        spaceBetween={10}
        onSwiper={(swiper) => setSwiperControll(swiper)}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5.5 },
        }}
        className="categories__list"
      >
        {categoriesData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="group categories__item"
            style={{ backgroundColor: item.bgColor }}
          >
            <div className="categories__overlay"></div>
            <div className="categories__content">
              <Image src={item.icon} className="categories__icon" alt="" />
              <h4 className="categories__name">{item.name}</h4>
              <p className="categories__description">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="categories__actions">
        <button
          onClick={() => swiperControll.slidePrev()}
          className="btn btn__icon btn--primary"
        >
          <Image
            src={assets.arrow_left_icon}
            className="btn__icon--item"
            alt=""
          />
          Prev
        </button>
        <button
          onClick={() => swiperControll.slideNext()}
          className="btn btn__icon btn--primary"
        >
          Next
          <Image
            src={assets.arrow_right_icon}
            className="btn__icon--item"
            alt=""
          />
        </button>
      </div>
    </section>
  );
}
