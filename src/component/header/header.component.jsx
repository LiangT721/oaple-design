import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";

import logo from "../../asset/logo_s.png";
import NavMobile from "../navMobile/navMobile.component";
import NavDesktop from "../navDesktop/navDesktop.component";

const Header = () => (
  <div className="header container-xl  h-auto">
    <div className="header-container pb-3 d-lg-flex justify-content-around align-items-center">
        <div className=" logo-container bg-white d-flex justify-content-center align-items-center">
          <Link to="/" className="link d-flex justify-content-center align-items-center">
            <img src={logo} className="logo" alt="" />
            <div className="logo-text d-flex justify-content-center align-items-center">
              <span className="oaple text-dark text-capitalize">oaple</span>
              <span className="design text-gray text-capitalize">design</span>
            </div>
          </Link>
        </div>
        <div className="nav-container h-auto p-0">
          <NavMobile />
          <NavDesktop />
        </div>
    </div>
  </div>
);

export default Header;
