"use client";

import { useState } from "react";
import { assets, categoriesData } from "@/assets";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Categories() {
  const [swiperControll, setSwiperControll] = useState(null);

  return (
    <section className="px-8 py-11 container mx-auto lg:px-28">
      <div className="space-y-8">
        <h2 className="text-2xl xl:text-4xl font-medium text-drakGray">
          Browser Our Category <br />{" "}
          <span className="text-primary">Receipt</span>
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
        >
          {categoriesData.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`${`bg-[${item.bgColor}]`} relative px-4 py-8 text-center rounded-lg hover:cursor-pointer group`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[7%] transition-opacity duration-300 bg-[url('/images/header-bg.png')] bg-cover bg-center rounded-lg"></div>
              <div className="relative z-10">
                <Image src={item.icon} className="mb-6 mx-auto" alt="" />
                <h4 className="mb-1 text-base font-medium text-drakGray">
                  {item.name}
                </h4>
                <p className="text-sm text-drakGray">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hidden md:flex justify-end gap-4">
          <button
            onClick={() => swiperControll.slidePrev()}
            className="flex items-center gap-2 bg-primary px-3 py-2.5 text-sm font-medium rounded-3xl text-white hover:bg-secondary transition duration-500"
          >
            <Image src={assets.arrow_left_icon} className="w-6" alt="" />
            Prev
          </button>
          <button
            onClick={() => swiperControll.slideNext()}
            className="flex items-center gap-2 bg-primary px-3 py-2.5 text-sm font-medium rounded-3xl text-white hover:bg-secondary transition duration-500"
          >
            Next
            <Image src={assets.arrow_right_icon} className="w-6" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
