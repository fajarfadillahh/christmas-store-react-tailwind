import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

// import images
import HeaderLogo from "../assets/images/logo.png";
import HeaderLight from "../assets/images/header-light.png";

// import components
import Button from "./Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const setHandleMenu = () => {
    setMenuOpen((even) => !even);
  };

  return (
    <header className="header fixed top-0 left-0 z-10 w-full">
      <div className="header__container container flex h-24 items-center justify-between">
        <Link
          to="/"
          className="header__logo inline-flex items-center gap-2 text-[18px] font-semibold text-gray-900"
        >
          <img
            src={HeaderLogo}
            alt="header logo"
            className="header__logo-icon w-8"
          />
          Christmas
        </Link>

        <div
          className={`header__menu fixed left-0 w-full origin-top rounded-b-[2rem] bg-white px-16 pt-28 pb-10 text-center shadow-md transition-all duration-400 ${
            menuOpen ? "top-0" : "-top-full"
          }`}
        >
          <img
            src={HeaderLight}
            alt="header light"
            className="header__light absolute top-0 left-0 w-28 -rotate-[15deg]"
          />

          <ul className="header__list mb-6 flex flex-col gap-6">
            {[
              ["About", "/about"],
              ["Celebrate", "/celebrate"],
              ["Gifts", "/gifts"],
              ["New", "/new"],
            ].map(([title, url]) => (
              <li key={url.toString()}>
                <Link to={url} className="header__link">
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <Button url="/sign-up">Create account</Button>
        </div>

        <div
          className="header__toggle z-20 inline-flex cursor-pointer text-[1.3rem] text-gray-900"
          onClick={setHandleMenu}
        >
          {!menuOpen ? <RiMenu3Line /> : <RiCloseLine />}
        </div>
      </div>
    </header>
  );
}
