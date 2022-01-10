import React from "react";
import upIcon from "../../asset/chevron-double-up.svg";

import "./navMobile.style.scss";

const NavMobile = () => (
  <div className="nav d-flex justify-content-center d-sm-none">
    <div className="menu-container w-100 text-center pb-3">
        <div className="about-us border-bottom fs-1">about us</div>
        <div className="my-service border-bottom fs-1">my service</div>
        <div className="portfolio border-bottom fs-1">portfolio</div>
        <div className="contact border-bottom fs-1">contact</div>
    </div>
    <div className="nav-icon">
      <img src={upIcon} className="text-dark" alt="" />
    </div>
  </div>
);

export default NavMobile;
