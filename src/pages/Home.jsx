import React from "react";

// import components & parts
import Header from "../components/Header";
import Hero from "../parts/HomePage/Hero";
import Giving from "../parts/HomePage/Giving";
import Celebrate from "../parts/HomePage/Celebrate";
import Gift from "../parts/HomePage/Gift";
import New from "../parts/HomePage/New";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Giving />
      <Celebrate />
      <Gift />
      <New />
    </>
  );
}
