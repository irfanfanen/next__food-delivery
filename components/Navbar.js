import Image from "next/image";
import { assets } from "@/assets";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="">
        <Image src={assets.logo} className="nav__logo" alt="logo" />
      </a>
      <div className="responsive--hidden-lg">
        <ul className="nav__list">
          <li>
            <a href="" className="nav__link nav__link--active">
              Home
            </a>
          </li>
          <li>
            <a href="" className="nav__link">
              About
            </a>
          </li>
          <li>
            <a href="" className="nav__link">
              Promotions
              <span className="nav__badge nav__badge--danger">HOT</span>
            </a>
          </li>
          <li>
            <a href="" className="nav__link">
              Blogs
            </a>
          </li>
          <li>
            <a href="" className="nav__link">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="nav__actions">
        <button className="responsive--hidden-lg btn btn--secondary">
          Sign In
        </button>
        <button className="btn btn--primary">Register Now</button>
      </div>
    </nav>
  );
}
