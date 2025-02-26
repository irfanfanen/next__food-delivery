import { productsData } from "@/assets";
import Image from "next/image";

export default function Products() {
  return (
    <section className="px-8 py-11 container mx-auto lg:px-28">
      <div className="space-y-8">
        <h2 className="text-2xl xl:text-4xl font-medium text-drakGray">
          Browser Our Trending <br />{" "}
          <span className="text-primary">Receipt</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {productsData.map((item, index) => (
            <div
              key={index}
              className={`${`bg-[${item.bgColor}]`} relative px-5 py-8 rounded-lg hover:cursor-pointer group`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[7%] transition-opacity duration-300 bg-[url('/images/header-bg.png')] bg-cover bg-center rounded-lg"></div>

              <div className="relative z-10">
                <Image src={item.image} className="mb-6" alt="" />
                <h4 className="mb-1 text-xl font-medium text-drakGray">
                  {item.name}
                </h4>
                <p className="text-lg text-primary">{item.category}</p>
                <Image src={item.rating} className="mt-2" alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="px-4.5 py-2.5 text-sm font-medium rounded-3xl text-white bg-primary hover:bg-secondary transition duration-500">
            All Receipt
          </button>
        </div>
      </div>
    </section>
  );
}
