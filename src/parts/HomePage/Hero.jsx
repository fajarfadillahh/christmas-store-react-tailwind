import React from "react";

// import images
import HeroImg from "../../assets/images/hero.png";

// import components
import Button from "../../components/Button";

export default function Hero() {
  return (
    <section className="hero section">
      <div className="hero__container container grid gap-12">
        <img
          src={HeroImg}
          alt="hero img"
          className="header__img justify-self-center"
        />

        <div className="hero__data justify-self-center text-center">
          <h1 className="hero__title section-title">
            Merry Christmas and <br />
            Happy New Year!
          </h1>
          <p className="hero__text section-text section-bottom">
            Christmas and a new year is about to begin, all good wishes and
            successes.
          </p>
          <Button url="/">Get started</Button>
        </div>
      </div>
    </section>
  );
}
