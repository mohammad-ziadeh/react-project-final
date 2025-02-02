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
import Event from "../components/eventCount/event"

export default function home() {
  return (
    <div style={{ backgroundColor: "snow" }}>
      <Navbar />
      <Hero />
      <About />
      <FloatButton.BackTop
        style={{
          backgroundColor: "#ed068c",
          color: "white",
          borderRadius: "50%",
          fontSize: "20px",
        }}
      />
      <Activity />
      <Event />
      <Contact />
      <Footer />
    </div>
  );
}
