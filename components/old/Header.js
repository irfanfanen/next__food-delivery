import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Header() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat h-screen bg-[url('/images/header-bg.png')] opacity-[2%]"></div>
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
