import { assets } from "@/assets";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="px-8 py-11 container mx-auto lg:px-28">
      <div className="bg-[#F0FEEB] px-16 py-20 grid grid-cols-1 md:grid-cols-4 gap-8 rounded-2xl">
        <div>
          <Image src={assets.logo} className="mb-6" alt="" />
          <p className="text-sm leading-[20px] text-lightGray mb-6">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
            Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
          </p>
          <div className="flex gap-4">
            <Image
              src={assets.mail_icon}
              className="hover:cursor-auto"
              alt=""
            />
            <Image
              src={assets.phone_icon}
              className="hover:cursor-auto"
              alt=""
            />
            <Image
              src={assets.instagram_icon}
              className="hover:cursor-auto"
              alt=""
            />
          </div>
        </div>
        <div>
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
        <div>
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
        <div>
          <h4 className="text-lg font-medium text-drakGray mb-4">Newsletter</h4>
          <p className="text-sm text-lightGray">
            Get now free 50% discount for alll products on your first order
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border border-lightGray focus:outline-none focus:border-primary rounded-l-lg px-4 py-2 mt-4"
            />
            <button className="text-sm text-white bg-primary rounded-r-md px-4 py-2 mt-4">
              SEND
            </button>
          </div>
          <div className="flex items-center gap-2 mt-4 text-sm text-drakGray">
            <Image src={assets.mail_icon} alt="" /> elemesid@gmail.com
          </div>
          <div className="flex items-center gap-2 mt-4 text-sm text-drakGray">
            <Image src={assets.phone_icon} alt="" /> 0888 1111 2222
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-lightGray mt-12">
        © 2021 ELEMES ID. ALL RIGHTS RESERVED
      </p>
    </footer>
  );
}
