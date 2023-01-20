import React from "react";
import { Link } from "react-router-dom";

export default function Button({ url, children, className }) {
  return (
    <Link
      to={url}
      className={
        `flex h-14 items-center justify-center rounded-full bg-red-600 py-4 px-8 text-[15px] font-semibold text-white hover:bg-red-500`.concat(
          " "
        ) + className
      }
    >
      {children}
    </Link>
  );
}
