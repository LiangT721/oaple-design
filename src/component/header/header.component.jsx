import React from "react";
import { connect } from "react-redux";
import "./header.style.scss";

import logo from "../../asset/logo_s.png";
import Nav from "../nav/nav.component";

const Header = ({ test }) => (
  <div className="header bg-light-gray">
    <div className="header-container bg-col1 container-xxl">
      <div className="bg-col3 logo-container row  p-2">
       <div className="logo-img bg-white col-4 d-flex justify-content-center align-items-center ">
			 	<img src={ logo } className="logo" alt="" />
			 </div>
			 <div className="logo-text col-8 d-flex justify-content-center align-items-center">
			 	<span className="oaple text-uppercase">oaple</span>
				<span className="design text-uppercase">design</span>
			 </div>
      </div>
      <Nav className="nav-container col-sm-8" />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  test: state.header.test,
});

export default connect(mapStateToProps)(Header);
