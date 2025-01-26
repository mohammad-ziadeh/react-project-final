import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Activity from "./pages/act/cards/activity";
import Navbar from "./pages/navbar/navbar";
import Hero from "./pages/hero section/hero section";
import Contact from "./pages/Contact/Contact";
import Slide from "./pages/footers/footerContainer/slideContent";
import About from "./pages/aboutUs/about";
import { FloatButton } from "antd";
export default function App() {
  return (
    <div style={{ backgroundColor: "#b7e6fa" }}>
      <Navbar />
      <Hero />
      <About />
      <FloatButton.BackTop />
      <Activity />
      <div>
        <Contact />
        <Slide />
      </div>
    </div>
  );
}
