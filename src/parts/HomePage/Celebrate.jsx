import React from "react";

// import images
import CelebrateImg from "../../assets/images/celebrate.png";

// import components
import Button from "../../components/Button";

export default function Celebrate() {
  return (
    <section className="celebrate section dark:bg-gray-900">
      <div className="celebrate__container container grid justify-items-center gap-12 lg:grid-cols-2 lg:items-center xl:max-w-5xl">
        <div className="celebrate__data text-center xs:max-w-sm sm:max-w-md lg:max-w-full lg:text-left">
          <h1 className="celebrate__title section-title xl:text-[42px]">
            Celebrate With A <br />
            Lot Of Love
          </h1>
          <p className="celebrate__text section-text section-bottom lg:w-[380px]">
            In this holidays, celebrate with much love and peace, offering many
            blessings to our loved ones, friends and neighbors, wishing them a
            good Christmas message.
          </p>
          <Button url="/gifts" className="sm:inline-flex">
            Send good wishes
          </Button>
        </div>

        <img
          src={CelebrateImg}
          alt="celebrate img"
          className="celebrate__img xs:max-w-sm sm:max-w-md lg:max-w-full"
        />
      </div>
    </section>
  );
}
