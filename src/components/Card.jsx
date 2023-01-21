import React from "react";
import { RiHeartLine } from "react-icons/ri";

export default function Card({ image, price, text }) {
  return (
    <div className="gift__card group relative grid gap-2 rounded-xl bg-white p-6 shadow-[0_4px_8px_rgba(0,0,0,0.07)] transition-all duration-400 hover:shadow-[0_4px_8px_rgba(0,0,0,0.12)] xl:p-8">
      <img
        src={image}
        alt="gift img"
        className="gift__card-img w-28 justify-self-center transition-all duration-400 group-hover:-translate-y-2 md:w-32 lg:w-36"
      />

      <div>
        <h3 className="gift__card-title pb-1 text-[18px] font-semibold text-gray-900 lg:text-[20px]">
          ${price}
        </h3>
        <p className="gift__card-text section-text text-[12px] lg:text-[15px]">
          {text}
        </p>
      </div>

      <div className="gift__card-wishlist absolute top-4 right-4 cursor-pointer text-[1.3rem] text-gray-300 hover:text-red-500">
        <RiHeartLine />
      </div>
    </div>
  );
}
