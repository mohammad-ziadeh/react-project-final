import React from "react";
import Activity from "../components/act/cards/activity";
import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero-section/hero-section";
import Contact from "../components/Contact/Contact";
import Footer from "../components/footers/Footer";
import About from "../components/aboutUs/about";
import { FloatButton } from "antd";

import "bootstrap/dist/css/bootstrap.min.css";

export default function home() {
  return (
    <div style={{ backgroundColor: "snow" }}>
      <Navbar />

      <Hero />
      <About />
      <FloatButton.BackTop />
      <Activity />
      <Contact />
      <Footer />
    </div>
  );
}
