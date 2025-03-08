import { assets, categoriesData } from "@/assets";
import Image from "next/image";

export default function Categories() {
  return (
    <section className="px-8 py-11 container mx-auto lg:px-28">
      <div className="space-y-8">
        <h2 className="text-4xl font-medium text-drakGray">
          Browser Our Category <br />{" "}
          <span className="text-primary">Receipt</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categoriesData.map((item, index) => (
            <div
              key={index}
              className={`${`bg-[${item.bgColor}]`} px-4 lg:px-20 py-8 text-center rounded-lg hover:cursor-pointer`}
            >
              <Image src={item.icon} className="mb-6 mx-auto" alt="" />
              <h4 className="mb-1 text-base font-medium text-drakGray">
                {item.name}
              </h4>
              <p className="text-sm text-drakGray">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-4">
          <button className="flex items-center gap-2 bg-primary px-3 py-2.5 text-sm font-medium rounded-3xl text-white">
            <Image src={assets.arrow_left_icon} className="w-6" alt="" />
            Prev
          </button>
          <button className="flex items-center gap-2 bg-primary px-3 py-2.5 text-sm font-medium rounded-3xl text-white">
            Next
            <Image src={assets.arrow_right_icon} className="w-6" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
