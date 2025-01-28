import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Activity from "./pages/act/cards/activity";
import Navbar from "./pages/navbar/navbar";
import Hero from "./pages/hero section/hero section";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/footers/Footer";
import About from "./pages/aboutUs/about";
import { FloatButton } from "antd";
export default function App() {
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
