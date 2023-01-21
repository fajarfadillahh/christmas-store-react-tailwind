import React from "react";

// import api gift
import DataProducts from "../../api/Products";

// import components
import GiftCard from "../../components/Card";

export default function Gift() {
  return (
    <section className="gift section">
      <div className="gift__container container grid justify-items-center gap-12">
        <div className="gift__data text-center">
          <h1 className="gift__title section-title">
            Share a gifts for <br />
            people you love
          </h1>
        </div>

        <div className="gift__group grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-x-12 lg:gap-y-8">
          {DataProducts.map((item) => (
            <GiftCard
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
