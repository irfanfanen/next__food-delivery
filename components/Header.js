import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Header() {
  return (
    <div className="header">
      <div className="header__background"></div>
      <div className="header__content">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
