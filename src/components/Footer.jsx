import React from "react";
import { Link } from "react-router-dom";

// import images
import FooterIcon from "../assets/images/logo.png";
import AvailableImg1 from "../assets/images/aviable1.png";
import AvailableImg2 from "../assets/images/aviable2.png";
import FooterImg1 from "../assets/images/footer1.png";
import FooterImg2 from "../assets/images/footer2.png";

export default function Footer() {
  return (
    <footer className="footer relative pt-32 pb-8">
      <div className="footer__container container grid gap-24">
        <div className="footer__group grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-12">
          <div className="footer__content">
            <div className="footer__content-logo mb-3 inline-flex items-center gap-2 text-[18px] font-semibold text-gray-900">
              <img
                src={FooterIcon}
                alt="footer logo"
                className="footer__content-icon w-8"
              />
              Chirstmas
            </div>
            <p className="footer__content-text section-text">
              This christmas give <br />a lot of love.
            </p>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title mb-5 text-[17px] font-semibold text-gray-900">
              Our Services
            </h3>

            <ul className="footer__content-list flex flex-col gap-2">
              {[
                ["Pricing", "/pricing"],
                ["Discounts", "/discounts"],
                ["Shipping Mode", "/shipping-mode"],
              ].map(([title, url]) => (
                <li key={url.toString()}>
                  <Link
                    to={url}
                    className="footer__content-link text-[15px] text-gray-600 hover:text-red-600 hover:underline"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title mb-5 text-[17px] font-semibold text-gray-900">
              Support
            </h3>

            <ul className="footer__content-list flex flex-col gap-2">
              {[
                ["FAQs", "/faqs"],
                ["Support Center", "/support-center"],
                ["Contact Us", "/contact-us"],
              ].map(([title, url]) => (
                <li key={url.toString()}>
                  <Link
                    to={url}
                    className="footer__content-link text-[15px] text-gray-600 hover:text-red-600 hover:underline"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title mb-5 text-[17px] font-semibold text-gray-900">
              Available On
            </h3>

            <ul className="footer__content-list flex flex-col gap-2">
              <li>
                <Link to="/" className="footer__content-button">
                  <img
                    src={AvailableImg1}
                    alt="footer img"
                    className="footer__content-img h-9 w-28"
                  />
                </Link>
              </li>
              <li>
                <Link to="/" className="footer__content-button">
                  <img
                    src={AvailableImg2}
                    alt="footer img"
                    className="footer__content-img h-9 w-28"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer__copyrights border-t border-gray-300 pt-8 text-center text-[15px] text-gray-600">
          © Copyrights 2023 Christmas. All rigths reserved | Develop by Fajar
          Fadillah A ❤️
        </p>
      </div>

      <img
        src={FooterImg1}
        alt="footer img"
        className="footer__img-1 absolute top-1/4 right-8 w-28"
      />
      <img
        src={FooterImg2}
        alt="footer img"
        className="footer__img-2 absolute top-[70%] -right-12 w-28"
      />
    </footer>
  );
}