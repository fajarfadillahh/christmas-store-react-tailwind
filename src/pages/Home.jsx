import React from "react";

// import components & parts
import Header from "../components/Header";
import Hero from "../parts/HomePage/Hero";
import Giving from "../parts/HomePage/Giving";
import Celebrate from "../parts/HomePage/Celebrate";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Giving />
      <Celebrate />
    </>
  );
}
