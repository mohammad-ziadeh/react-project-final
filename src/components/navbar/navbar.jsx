import React from "react";
import "./rawan2.css";
import logo from "../../../public/img/Green_and_Yellow_Illustrative_Children___Kids_Logo__3_-removebg-preview.png";
import { styled, Switch } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const lngs = {
  en: { nativeName: "English" },
  ar: { nativeName: "عربي" },
  fr : { nativeName: "Français" },
};

function Navbar() {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about");
  };
  const goToHome = () => {
    navigate("/");
  };
  const goToContact = () => {
    navigate("/contact");
  };

  const { i18n } = useTranslation();

  return (
    <nav className="navbar">
      <div>
        {Object.keys(lngs).map((lng) => (
          <div>
            <Switch
              checked={i18n.language === lng}
              onChange={() => i18n.changeLanguage(lng)}
            />
            <span>{lngs[lng].nativeName}</span>{" "}
          </div>
        ))}
      </div>
      <div className="logo-container">
        <img src={logo} alt="Shining Stars Logo" className="logo" />
      </div>

      <h2>
        <span className="span1" style={{ fontFamily: "Nunito" }}>
          Shining
        </span>
        <span className="span2" style={{ fontFamily: "Nunito" }}>
          Stars
        </span>
        <span className="span3" style={{ fontFamily: "Nunito" }}>
          Academy
        </span>
      </h2>
      <ul className="nav-links" style={{ fontFamily: "Nunito" }}>
        <li>
          <a className="navigation" onClick={goToHome}>
            Home
          </a>
        </li>
        <li>
          <a className="navigation" onClick={goToAbout}>
            About
          </a>
        </li>
        {/* <li>
          <a href="#">Activity</a>
        </li> */}
        <li>
          <a className="navigation" onClick={goToContact}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
