import React from "react";

// import new products api
import DataNewProducts from "../../api/NewProducts";

import NewCard from "../../components/Card";

export default function New() {
  return (
    <section className="new section">
      <div className="new__container container grid justify-items-center gap-12">
        <div className="new__data text-center">
          <h1 className="new__title section-title">New Products Gifts</h1>
        </div>

        <div className="new__group grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-x-12 lg:gap-y-8">
          {DataNewProducts.map((item) => (
            <NewCard
              key={item.id}
              image={item.image}
              price={item.price}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
