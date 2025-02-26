import { productsData } from "@/assets";
import Image from "next/image";

export default function Products() {
  return (
    <section className="px-8 py-11 container mx-auto lg:px-28">
      <div className="space-y-8">
        <h2 className="text-4xl font-medium text-drakGray">
          Browser Our Trending <br />{" "}
          <span className="text-primary">Receipt</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {productsData.map((item, index) => (
            <div
              key={index}
              className={`${`bg-[${item.bgColor}]`} px-5 py-8 rounded-lg hover:cursor-pointer`}
            >
              <Image src={item.image} className="mb-6" alt="" />
              <h4 className="mb-1 text-xl font-medium text-drakGray">
                {item.name}
              </h4>
              <p className="text-lg text-primary">{item.category}</p>
              <Image src={item.rating} className="mt-2" alt="" />
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="px-3 py-2.5 text-base font-medium rounded-3xl text-white bg-primary">
            ALL Receipt
          </button>
        </div>
      </div>
    </section>
  );
}
