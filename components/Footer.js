import { assets } from "@/assets";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <Image src={assets.logo} className="footer__logo" alt="" />
          <p className="footer__address">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
            Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
          </p>
          <div className="footer__social">
            <div className="group footer__social-item">
              <Image
                src="/icons/mail.svg"
                width={20}
                height={20}
                alt=""
                className="footer__social-icon"
              />
            </div>
            <div className="group footer__social-item">
              <Image
                src="/icons/phone.svg"
                width={20}
                height={20}
                alt=""
                className="footer__social-icon"
              />
            </div>
            <div className="group footer__social-item">
              <Image
                src="/icons/instagram.svg"
                width={20}
                height={20}
                alt=""
                className="footer__social-icon"
              />
            </div>
          </div>
        </div>
        <div className="footer__links">
          <h4 className="footer__links-title">Categories</h4>
          <ul className="footer__links-list">
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
        <div className="footer__links">
          <h4 className="footer__links-title">About Us</h4>
          <ul className="footer__links-list">
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
        <div className="footer__newsletter">
          <h4 className="footer__newsletter-title">Newsletter</h4>
          <p className="footer__newsletter-description">
            Get now free 50% discount for alll products on your first order
          </p>
          <div className="footer__newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="footer__newsletter-input"
            />
            <button className="footer__newsletter-button">Send</button>
          </div>
          <div className="footer__newsletter-contact">
            <Image src="/icons/mail.svg" width={20} height={20} alt="" />{" "}
            elemesid@gmail.com
          </div>
          <div className="footer__newsletter-contact">
            <Image src="/icons/phone.svg" width={20} height={20} alt="" /> 0888
            1111 2222
          </div>
        </div>
      </div>
      <p className="footer__copyright">
        © {new Date().getFullYear()} Elemes id. All rights reserved
      </p>
    </footer>
  );
}
