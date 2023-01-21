import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

// import images
import HeaderLogo from "../assets/images/logo.png";
import HeaderLight from "../assets/images/header-light.png";

// import color mode
import useColorMode from "../hooks/useColorMode";

// import components
import Button from "./Button";

export default function Header() {
  // toggle menu
  const [menuOpen, setMenuOpen] = useState(false);

  const setHandleMenu = () => {
    setMenuOpen((even) => !even);
  };

  // add shadow when scrolling
  const [headerShadow, setHeaderShadow] = useState(false);

  useEffect(() => {
    const addHeaderShadow = () => {
      if (window.scrollY >= 20) {
        setHeaderShadow(true);
      } else {
        setHeaderShadow(false);
      }
    };
    window.addEventListener("scroll", addHeaderShadow);

    return () => {
      window.removeEventListener("scroll", addHeaderShadow);
    };
  }, []);

  // set dark mode
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header
      className={`header fixed top-0 left-0 z-10 w-full bg-white transition-all duration-400 dark:bg-gray-900 ${
        headerShadow ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="header__container container flex h-24 items-center justify-between">
        <Link
          to="/"
          className="header__logo inline-flex items-center gap-2 text-[18px] font-semibold text-gray-900 dark:text-white"
        >
          <img
            src={HeaderLogo}
            alt="header logo"
            className="header__logo-icon w-8"
          />
          Christmas
        </Link>

        <div
          className={`header__menu fixed left-0 w-full origin-top rounded-b-[2rem] bg-white px-16 pt-28 pb-10 text-center shadow-md transition-all duration-400 dark:bg-gray-900 md:static md:top-0 md:flex md:w-auto md:items-center md:gap-8 md:rounded-none md:bg-transparent md:p-0 md:shadow-none ${
            menuOpen ? "top-0" : "-top-full"
          }`}
        >
          <img
            src={HeaderLight}
            alt="header light"
            className="header__light absolute top-0 left-0 w-28 -rotate-[15deg] md:hidden"
          />

          <ul className="header__list mb-6 flex flex-col gap-6 md:mb-0 md:flex md:flex-row md:gap-8">
            {[
              ["About", "/about"],
              ["Celebrate", "/celebrate"],
              ["Gifts", "/gifts"],
              ["New Products", "/new-products"],
            ].map(([title, url]) => (
              <li key={url.toString()}>
                <Link
                  to={url}
                  className="header__link text-[15px] font-medium text-gray-900 hover:text-red-500 dark:text-white dark:hover:text-red-500"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* theme toggle */}
          <div
            className="header__theme absolute right-16 top-24 cursor-pointer text-[1.5rem] md:top-28 md:right-24 lg:static"
            onClick={() => {
              setColorMode(colorMode === "light" ? "dark" : "light");
            }}
          >
            {colorMode === "light" ? "🌙" : "☀️"}
          </div>

          <Button url="/sign-up">Create account</Button>
        </div>

        <div
          className="header__toggle z-20 inline-flex cursor-pointer text-[1.3rem] text-gray-900 dark:text-white md:hidden"
          onClick={setHandleMenu}
        >
          {!menuOpen ? <RiMenu3Line /> : <RiCloseLine />}
        </div>
      </div>
    </header>
  );
}
