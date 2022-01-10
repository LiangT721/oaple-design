import React from "react";
import { connect } from "react-redux";
import "./header.style.scss";

import logo from "../../asset/logo_s.png";
import Nav from "../nav/nav.component";

const Header = ({ test }) => (
  <div className="header">
    <div className="header-container container-xxl">
      <div className="row">
        <div className=" logo-container col-sm-4 p-3">
          <div className="row h-100">
            <div className="logo-img col-4 d-flex justify-content-center align-items-center ">
              <img src={logo} className="logo" alt="" />
            </div>
            <div className="logo-text col-7 px-0 d-flex justify-content-center align-items-center">
              <span className="oaple text-dark text-capitalize">oaple</span>
              <span className="design text-gray text-capitalize">design</span>
            </div>
          </div>
        </div>
        <div className="nav-container col-sm-8 h-auto p-0">
          <Nav />
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  test: state.header.test,
});

export default connect(mapStateToProps)(Header);
