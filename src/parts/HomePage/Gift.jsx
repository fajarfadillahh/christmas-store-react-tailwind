import React from "react";
import { RiHeartLine } from "react-icons/ri";

// import images
import GiftImg1 from "../../assets/images/gift1.png";
import GiftImg2 from "../../assets/images/gift2.png";
import GiftImg3 from "../../assets/images/gift3.png";
import GiftImg4 from "../../assets/images/gift4.png";
import GiftImg5 from "../../assets/images/gift5.png";

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

        <div className="gift__group grid grid-cols-2 gap-6">
          <div className="gift__content group relative grid gap-2 rounded-xl bg-white p-6 shadow-[0_4px_8px_rgba(0,0,0,0.07)] transition-all duration-400 hover:shadow-[0_4px_8px_rgba(0,0,0,0.12)]">
            <img
              src={GiftImg1}
              alt="gift img"
              className="gift__content-img w-28 justify-self-center transition-all duration-400 group-hover:-translate-y-2"
            />

            <div>
              <h3 className="gift__content-title pb-1 text-[18px] font-semibold text-gray-900">
                $14.99
              </h3>
              <p className="gift__content-text section-text text-[12px]">
                Gingerbread
              </p>
            </div>

            <div className="gift__content-wishlist absolute top-4 right-4 cursor-pointer text-[1.3rem] text-gray-300 hover:text-red-500">
              <RiHeartLine />
            </div>
          </div>

          <div className="gift__content group relative grid gap-2 rounded-xl bg-white p-6 shadow-[0_4px_8px_rgba(0,0,0,0.07)] transition-all duration-400 hover:shadow-[0_4px_8px_rgba(0,0,0,0.12)]">
            <img
              src={GiftImg2}
              alt="gift img"
              className="gift__content-img w-28 justify-self-center transition-all duration-400 group-hover:-translate-y-2"
            />

            <div>
              <h3 className="gift__content-title pb-1 text-[18px] font-semibold text-gray-900">
                $20.99
              </h3>
              <p className="gift__content-text section-text text-[12px]">
                Santa Claus Hat
              </p>
            </div>

            <div className="gift__content-wishlist absolute top-4 right-4 cursor-pointer text-[1.3rem] text-gray-300 hover:text-red-500">
              <RiHeartLine />
            </div>
          </div>

          <div className="gift__content group relative grid gap-2 rounded-xl bg-white p-6 shadow-[0_4px_8px_rgba(0,0,0,0.07)] transition-all duration-400 hover:shadow-[0_4px_8px_rgba(0,0,0,0.12)]">
            <img
              src={GiftImg3}
              alt="gift img"
              className="gift__content-img w-28 justify-self-center transition-all duration-400 group-hover:-translate-y-2"
            />

            <div>
              <h3 className="gift__content-title pb-1 text-[18px] font-semibold text-gray-900">
                $44.99
              </h3>
              <p className="gift__content-text section-text text-[12px]">
                Christmas Tree
              </p>
            </div>

            <div className="gift__content-wishlist absolute top-4 right-4 cursor-pointer text-[1.3rem] text-gray-300 hover:text-red-500">
              <RiHeartLine />
            </div>
          </div>

          <div className="gift__content group relative grid gap-2 rounded-xl bg-white p-6 shadow-[0_4px_8px_rgba(0,0,0,0.07)] transition-all duration-400 hover:shadow-[0_4px_8px_rgba(0,0,0,0.12)]">
            <img
              src={GiftImg4}
              alt="gift img"
              className="gift__content-img w-28 justify-self-center transition-all duration-400 group-hover:-translate-y-2"
            />

            <div>
              <h3 className="gift__content-title pb-1 text-[18px] font-semibold text-gray-900">
                $31.99
              </h3>
              <p className="gift__content-text section-text text-[12px]">
                Snowman
              </p>
            </div>

            <div className="gift__content-wishlist absolute top-4 right-4 cursor-pointer text-[1.3rem] text-gray-300 hover:text-red-500">
              <RiHeartLine />
            </div>
          </div>

          <div className="gift__content group relative grid gap-2 rounded-xl bg-white p-6 shadow-[0_4px_8px_rgba(0,0,0,0.07)] transition-all duration-400 hover:shadow-[0_4px_8px_rgba(0,0,0,0.12)]">
            <img
              src={GiftImg5}
              alt="gift img"
              className="gift__content-img w-28 justify-self-center transition-all duration-400 group-hover:-translate-y-2"
            />

            <div>
              <h3 className="gift__content-title pb-1 text-[18px] font-semibold text-gray-900">
                $11.99
              </h3>
              <p className="gift__content-text section-text text-[12px]">
                Candy Stick
              </p>
            </div>

            <div className="gift__content-wishlist absolute top-4 right-4 cursor-pointer text-[1.3rem] text-gray-300 hover:text-red-500">
              <RiHeartLine />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
