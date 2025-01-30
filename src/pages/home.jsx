import React from "react";
import Activity from "./act/cards/activity";
import Navbar from "./navbar/navbar";
import Hero from "./hero-section/hero-section";
import Contact from "./Contact/Contact";
import Footer from "./footers/Footer";
import About from "./aboutUs/about";
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
