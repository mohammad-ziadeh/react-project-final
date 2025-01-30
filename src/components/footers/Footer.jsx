import React from "react";
import "./styles/Footer.css";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";


function Footer() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <h2 className="brand-name">
             <p>
                <span style={{color:'#ed128f'}}>{t("S")}</span>{t("hining")}  <span style={{color:"#fbd010"}}>{t("Ss")}</span>{t("tars")}   <span style={{color:"#12d9df"}}>{t("A")}</span>{t("cademy")}
                </p>
          </h2>
          <p style={{paddingInline:"20px"}}> 
            {t("footer-description")}
             </p>
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
          <p>
        {t("©")}
        </p>
        </div>
        <div className="footer-section footer-links">
          <ul>
            <li><h2>  {t("Quick")} </h2></li>
            <li><a href="#">   {t("about")} </a></li>
            <li><a href="#"> {t("activity")}</a></li>
            <li><a href="#"> {t("contact")}</a></li>
            <li><a href="#"> {t("students")}</a></li>
          </ul>
        </div>
        
      </div>
      {/* <div className="footer-bottom">
        <p>
        {t("©")}
        </p>
      </div> */}
    </footer>
  );
}

export default Footer;
