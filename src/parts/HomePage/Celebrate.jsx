import React from "react";

// import images
import CelebrateImg from "../../assets/images/celebrate.png";

// import components
import Button from "../../components/Button";

export default function Celebrate() {
  return (
    <section className="celebrate section">
      <div className="celebrate__container container grid justify-items-center gap-12">
        <div className="celebrate__data text-center">
          <h1 className="celebrate__title section-title">
            Celebrate With A <br />
            Lot Of Love
          </h1>
          <p className="celebrate__text section-text section-bottom">
            In this holidays, celebrate with much love and peace, offering many
            blessings to our loved ones, friends and neighbors, wishing them a
            good Christmas message.
          </p>
          <Button url="/gifts">Send good wishes</Button>
        </div>

        <img
          src={CelebrateImg}
          alt="celebrate img"
          className="celebrate__img"
        />
      </div>
    </section>
  );
}
