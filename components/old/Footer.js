import { assets } from "@/assets";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="px-8 py-11 container mx-auto lg:px-28">
      <div className="bg-lightGreen px-8 py-12 lg:px-16 lg:py-20 flex flex-wrap gap-8 lg:gap-0 justify-between rounded-2xl">
        <div className="w-full lg:w-[36%]">
          <Image src={assets.logo} className="mb-6" alt="" />
          <p className="text-sm leading-[20px] text-lightGray mb-6">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
            Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
          </p>
          <div className="flex gap-2">
            <div className="group p-2 bg-white border border-gray-200 rounded-full transition duration-500 hover:bg-primary hover:cursor-pointer hover:-translate-y-1">
              <Image
                src="/icons/mail.svg"
                width={20}
                height={20}
                alt=""
                className="group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <div className="group p-2 bg-white border border-gray-200 rounded-full transition duration-500 hover:bg-primary hover:cursor-pointer hover:-translate-y-1">
              <Image
                src="/icons/phone.svg"
                width={20}
                height={20}
                alt=""
                className="group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <div className="group p-2 bg-white border border-gray-200 rounded-full transition duration-500 hover:bg-primary hover:cursor-pointer hover:-translate-y-1">
              <Image
                src="/icons/instagram.svg"
                width={20}
                height={20}
                alt=""
                className="group-hover:brightness-0 group-hover:invert"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[14%]">
          <h4 className="text-lg font-medium text-drakGray mb-4">Categories</h4>
          <ul className="text-sm text-lightGray space-y-4">
            <li>
              <a href="">Cupcake</a>
            </li>
            <li>
              <a href="">Pizza</a>
            </li>
            <li>
              <a href="">Kebab</a>
            </li>
            <li>
              <a href="">Salmon</a>
            </li>
            <li>
              <a href="">Dougnut</a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-[14%]">
          <h4 className="text-lg font-medium text-drakGray mb-4">About Us</h4>
          <ul className="text-sm text-lightGray space-y-4">
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Report Problem</a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-[26%]">
          <h4 className="text-lg font-medium text-drakGray mb-4">Newsletter</h4>
          <p className="text-sm text-lightGray">
            Get now free 50% discount for alll products on your first order
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border border-gray-300 focus:outline-none focus:border-primary rounded-l-lg px-4 py-2 mt-4"
            />
            <button className="text-sm text-white bg-primary rounded-r-md px-4 py-2 mt-4 hover:bg-secondary transition duration-500">
              Send
            </button>
          </div>
          <div className="flex items-center gap-2 mt-4 text-sm text-lightGray">
            <Image src="/icons/mail.svg" width={20} height={20} alt="" />{" "}
            elemesid@gmail.com
          </div>
          <div className="flex items-center gap-2 mt-4 text-sm text-lightGray">
            <Image src="/icons/phone.svg" width={20} height={20} alt="" /> 0888
            1111 2222
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-lightGray mt-12">
        © {new Date().getFullYear()} Elemes id. All rights reserved
      </p>
    </footer>
  );
}
