import React from "react";
import upIcon from "../../asset/chevron-double-up.svg";

import "./nav.style.scss";

const Nav = () => (
  <div className="nav d-flex justify-content-center">
    <div className="menu-container w-100 text-center pb-3">
        <div className="about-us border-bottom">about us</div>
        <div className="my-service border-bottom">my service</div>
        <div className="portfolio border-bottom">portfolio</div>
        <div className="contact border-bottom">contact</div>
    </div>
    <div className="nav-icon">
      <img src={upIcon} className="text-dark" alt="" />
    </div>
  </div>
);

export default Nav;
