import React from "react";
import "./styles/footer2.css";
import Data from "./json/footerData.json";

function Footer() {
  return (
    <footer className="footer2">
      <p className="footer2-text">{Data.footer.firstOne}</p>
      <ul className="footer-links"></ul>
    </footer>
  );
}

export default Footer;
