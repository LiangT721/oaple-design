import React from "react";

import "./footer.style.scss";
import { contactText } from "../../data/contactText.data";

const Footer = () => (
  <div className="footer bg-dark-gray text-light-gray">
    <div className="footer-title">Contact Us</div>
    <div className="footer-content">
      <div className="footer-content-div">
        <div className="footer-content-icon"></div>
        <div className="footer-content-text">{contactText.phone}</div>
      </div>
      <div className="footer-content-div">
        <div className="footer-content-icon"></div>
        <div className="footer-content-text">{contactText.email}</div>
      </div>
      <div className="footer-content-div">
        <div className="footer-content-icon"></div>
        <div className="footer-content-text">{contactText.address}</div>
      </div>
    </div>
    <div className="splitter"></div>
    <div className="copyright">@2022 OapleDesign Inc.</div>
  </div>
);

export default Footer;
