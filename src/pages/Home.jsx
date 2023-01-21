import React from "react";

// import components & parts
import Header from "../components/Header";
import Hero from "../parts/HomePage/Hero";
import Giving from "../parts/HomePage/Giving";
import Celebrate from "../parts/HomePage/Celebrate";
import Gift from "../parts/HomePage/Gift";
import New from "../parts/HomePage/New";
import Message from "../components/Message";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Hero />
        <Giving />
        <Celebrate />
        <Gift />
        <New />
        <Message />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
