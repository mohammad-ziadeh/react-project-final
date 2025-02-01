import React from "react";
import "../styles/homeStyle.css";
import Activity from "../components/act/cards/activity";
import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero-section/hero-section";
import Footer from "../components/footers/Footer";
import About from "../components/aboutUs/about";
import Contact from "../components/Contact/Contact";
import { FloatButton } from "antd";
import ScrollAnimation from "react-animate-on-scroll";
import "bootstrap/dist/css/bootstrap.min.css";

export default function home() {
  return (
    <div style={{ backgroundColor: "snow" }}>
      <Navbar />
        <Hero />

      <About />
      <FloatButton.BackTop
        style={{
          background:
            "linear-gradient(45deg, #FF6F61, #FFD166, #06D6A0, #118AB2)",
          color: "white",
          borderRadius: "50%", // Fully round
          fontSize: "20px",
        }}
      />
      <Activity />
      <Contact />
      <Footer />
    </div>
  );
}
