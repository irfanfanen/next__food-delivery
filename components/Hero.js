import Image from "next/image";
import { assets } from "@/assets";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Good Food Us Good Mood</h1>
          <div className="responsive--show-md">
            <Image src={assets.hero_small} alt="logo" />
          </div>
          <p className="hero__description">
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </p>
          <div className="hero__actions">
            <button className="btn btn--primary">Register Now</button>
            <button className="btn btn--secondary">About Us</button>
          </div>
        </div>
        <div className="responsive--hidden-md hero__image">
          <Image src={assets.hero_big} alt="logo" />
        </div>
      </div>
    </section>
  );
}
