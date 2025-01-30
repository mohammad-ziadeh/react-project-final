import React, { useState, useEffect } from "react";
import Coach from "../components/Teams/coach";
import Technical from "../components/Teams/technical";
import Nutrotion from "../components/Teams/nutrotion";
import ScrollAnimation from "react-animate-on-scroll";
import Navbar from "../components/navbar/navbar";
import "animate.css/animate.compat.css";
import Footer from "../components/footers/Footer";
import Motion from "../components/motion-scroll/studentsRoll";
import "../components/Teams/team.css";

export default function Team() {
  return (
    <div>
      <Navbar />
      <ScrollAnimation animateIn="fadeIn">
        <Coach />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Technical />
      </ScrollAnimation>
      <br />
      <br />
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "600",
          lineHeight: "48px",
          letterSpacing: "0px",
          marginTop: "100px",
          color: "#DC552C ",
        }}
      >
        Our Students
      </h2>
      <br />
      <ScrollAnimation animateIn="fadeIn">
        <Motion />
      </ScrollAnimation>
      <Footer />
    </div>
  );
}
