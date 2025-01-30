

import React from "react";
import "./styles/footer.css";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";


function Footer() {
  return (
    
      <footer className="footer">
       <h2> <span style={{color:"#ed128f"}}>S</span>hining <span style={{color:"#fbd010"}}>S</span>tars <span style={{color:"#12d9df"}}>A</span>cademy</h2>
        <p> we believe coding is the language of the future! We provide a fun and interactive learning environment where children can develop creativity and problem-solving skills through engaging projects and hands-on coding experiences.</p>
        <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
          <div className="footer-section footer-links">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Activity</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <p className="footer-text">
          © 2025 Shining Stars Academy. All Rights Reserved.
        </p>
      </footer>
  
  );
}

export default Footer;
