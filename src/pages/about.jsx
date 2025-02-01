import React, { useState, useEffect } from "react";
import Coach from "../components/Teams/coach";
import Technical from "../components/Teams/technical";
import ScrollAnimation from "react-animate-on-scroll";
import Navbar from "../components/navbar/navbar";
import "animate.css/animate.compat.css";
import Footer from "../components/footers/Footer";
import Motion from "../components/motion-scroll/studentsRoll";
import "../components/Teams/team.css";
import SecHero from "../components/SecHero/SecHero";
import { FloatButton } from "antd";
import { useTranslation } from "react-i18next";

export default function Team({ Title }) {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <SecHero Title={t("about_us")} />;
      <ScrollAnimation animateIn="fadeIn">
        <Coach />
      </ScrollAnimation>
      <FloatButton.BackTop
        style={{
          backgroundColor: "#ed068c",
          color: "white",
          borderRadius: "50%",
          fontSize: "20px",
        }}
      />
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
        {t("student")}
      </h2>
      <br />
      <ScrollAnimation animateIn="fadeIn">
        <Motion />
      </ScrollAnimation>
      <Footer />
    </div>
  );
}
