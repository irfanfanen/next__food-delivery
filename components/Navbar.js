import { assets } from "@/assets";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="px-8 lg:px-28 py-6 container mx-auto flex justify-between items-center">
        <a href="">
          <Image
            src={assets.logo}
            className="w-[150px] md:w-[207]"
            alt="logo"
          />
        </a>
        <div className="hidden xl:block">
          <ul className="flex space-x-8">
            <li>
              <a
                href=""
                className="font-medium text-sm text-lightGray hover:text-primary"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                className="font-medium text-sm text-lightGray hover:text-primary"
              >
                About
              </a>
            </li>
            <li>
              <a
                href=""
                className="font-medium text-sm text-lightGray hover:text-primary relative"
              >
                Promotions
                <span className="absolute -top-4.5 -right-4 bg-red-500 text-white px-[9px] py-[3px] rounded-full text-[8px] leading-[14px] font-bold">
                  HOT
                </span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="font-medium text-sm text-lightGray hover:text-primary"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href=""
                className="font-medium text-sm text-lightGray hover:text-primary"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex space-x-6">
          <button className="hidden xl:block text-sm font-medium text-drakGray hover:text-primary">
            Masuk
          </button>
          <button className="bg-primary text-sm font-medium text-white px-4.5 py-2.5 rounded-3xl">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </nav>
  );
}
