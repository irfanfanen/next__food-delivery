import { productsData } from "@/assets";
import Image from "next/image";

export default function Products() {
  return (
    <section className="products">
      <h2 className="products__title">
        Browser Our Trending <br />{" "}
        <span className="products__title--primary">Receipt</span>
      </h2>
      <div className="products__list">
        {productsData.map((item, index) => (
          <div
            key={index}
            className="group products__item"
            style={{ backgroundColor: item.bgColor }}
          >
            <div className="products__overlay"></div>
            <div className="products__content">
              <Image src={item.image} className="products__image" alt="" />
              <h4 className="products__name">{item.name}</h4>
              <p className="products__category">{item.category}</p>
              <Image src={item.rating} className="mt-2" alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="products__actions">
        <button className="btn btn--primary">All Receipt</button>
      </div>
    </section>
  );
}
