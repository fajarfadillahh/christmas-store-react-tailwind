import React from "react";

// import images
import HeroImg from "../../assets/images/hero.png";

// import components
import Button from "../../components/Button";

export default function Hero() {
  return (
    <section className="hero section dark:bg-gray-900">
      <div className="hero__container container grid justify-items-center gap-12 lg:grid-cols-2 lg:items-center xl:max-w-5xl">
        <img
          src={HeroImg}
          alt="hero img"
          className="header__img xs:max-w-sm sm:max-w-md lg:max-w-full"
        />

        <div className="hero__data text-center xs:max-w-sm sm:max-w-md lg:max-w-full lg:text-left">
          <h1 className="hero__title section-title xl:text-[42px]">
            Merry Christmas and <br />
            Happy New Year!
          </h1>
          <p className="hero__text section-text section-bottom sm:max-w-[350px] xl:max-w-[300px]">
            Christmas and a new year is about to begin, all good wishes and
            successes.
          </p>
          <Button url="/" className="sm:inline-flex">
            Get started
          </Button>
        </div>
      </div>
    </section>
  );
}
