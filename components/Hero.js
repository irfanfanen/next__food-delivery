import { assets } from "@/assets";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="px-8 py-11 md:py-0 container mx-auto lg:px-28">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2 space-y-8">
          <h1 className="text-[48px] md:text-[64px] leading-[64px] text-primary font-medium">
            Good Food Us Good Mood
          </h1>
          <div className="md:hidden">
            <Image src={assets.hero_small} alt="logo" />
          </div>
          <p className="text-lg leading-[29px] text-lightGray">
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </p>
          <div className="flex space-x-4">
            <button className="bg-primary text-sm font-medium text-white px-4.5 py-2.5 rounded-3xl shadow-xl hover:bg-secondary transition duration-500">
              Register Now
            </button>
            <button className="text-lightGray text-sm font-medium border border-gray-200 px-4.5 py-2.5 rounded-3xl hover:text-primary hover:border-primary duration-500">
              About Us
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 justify-center hidden md:flex">
          <Image src={assets.hero_big} alt="logo" />
        </div>
      </div>
    </section>
  );
}
