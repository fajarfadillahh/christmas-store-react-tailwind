import React from "react";

// import components & parts
import Header from "../components/Header";
import Hero from "../parts/HomePage/Hero";
import Giving from "../parts/HomePage/Giving";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Giving />
    </>
  );
}
