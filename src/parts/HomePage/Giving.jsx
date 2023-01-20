import React from "react";

// import images
import GivingImg1 from "../../assets/images/giving1.png";
import GivingImg2 from "../../assets/images/giving2.png";
import GivingImg3 from "../../assets/images/giving3.png";

export default function Giving() {
  return (
    <section className="giving section">
      <div className="giving__container container grid justify-items-center gap-12">
        <div className="giving__data text-center">
          <h1 className="giving__title section-title">
            Start Giving This <br />
            Christmas
          </h1>
        </div>

        <div className="giving__group grid grid-cols-[repeat(2,1fr)] gap-x-6 gap-y-10">
          <div className="giving__content grid justify-items-center gap-2 text-center">
            <img
              src={GivingImg1}
              alt="giving img"
              className="giving__content-img w-28"
            />

            <div>
              <h3 className="giving__content-title pb-2 text-[18px] font-semibold text-gray-900">
                Surprise gifts
              </h3>
              <p className="giving__content-text section-text">
                They are the best gifts there is.
              </p>
            </div>
          </div>

          <div className="giving__content grid justify-items-center gap-2 text-center">
            <img
              src={GivingImg2}
              alt="giving img"
              className="giving__content-img w-28"
            />

            <div>
              <h3 className="giving__content-title pb-2 text-[18px] font-semibold text-gray-900">
                Ornaments
              </h3>
              <p className="giving__content-text section-text">
                Give a moment to decorate.
              </p>
            </div>
          </div>

          <div className="giving__content grid justify-items-center gap-2 text-center">
            <img
              src={GivingImg3}
              alt="giving img"
              className="giving__content-img w-28"
            />

            <div>
              <h3 className="giving__content-title pb-2 text-[18px] font-semibold text-gray-900">
                Lots of love
              </h3>
              <p className="giving__content-text section-text">
                Give away feelings that last forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
