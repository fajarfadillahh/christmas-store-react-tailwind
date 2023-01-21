import React, { useState, useEffect } from "react";
import { RiArrowUpLine } from "react-icons/ri";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY >= 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll fixed right-6 z-10 cursor-pointer rounded-xl bg-red-600 p-3 text-[1.5rem] text-white transition-all duration-400 hover:bg-red-500 ${
        visible ? "bottom-16" : "-bottom-full"
      }`}
      onClick={scrollToTop}
    >
      <RiArrowUpLine />
    </div>
  );
}
