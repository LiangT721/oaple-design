import React from "react";
import upIcon from "../../asset/chevron-double-up.svg";
import { Link } from "react-router-dom";

import { toggleNavHidden } from "../../redux/header/header.action";
import Text from "../text/text.component";
import LanguageToggle from "../languageToggle/languageToggle.component";

import { connect } from "react-redux";

import "./navMobile.style.scss";

const aboutUs = ["about us", "关于我们", "aboutus"];
const myService = ["my service", "我们的服务", "myservice"];
const portfolio = ["portfolio", "作品", "portfolio"];
const contact = ["contact", "联系我们", "contact"];

const NavMobile = ({ NavHidden, toggleNavHidden }) => (
  <div className="nav d-flex justify-content-center d-lg-none">
    <div
      className={`${
        NavHidden ? "fold" : "unfold"
      } menu-container w-100 text-center pb-3`}
    >
      <Link to="aboutus" className="link" onClick={toggleNavHidden}>
        <div className="text-container about-us border-bottom fs-1">
          <Text text={aboutUs} />
        </div>
      </Link>
      <Link to="myservice" className="link" onClick={toggleNavHidden}>
        <div className="text-container my-service border-bottom fs-1">
          <Text text={myService} />
        </div>
      </Link>
      <Link to="portfolio" className="link" onClick={toggleNavHidden}>
        <div className="text-container portfolio border-bottom fs-1">
          <Text text={portfolio} />
        </div>
      </Link>
      <Link to="contact" className="link" onClick={toggleNavHidden}>
        <div className="text-container contact border-bottom fs-1">
          <Text text={contact} />
        </div>
      </Link>
      <LanguageToggle />
    </div>
    <div className="nav-icon">
      <img
        src={upIcon}
        className={`${NavHidden ? "down" : ""} upIcon text-dark`}
        onClick={toggleNavHidden}
        alt=""
      />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  NavHidden: state.header.NavHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleNavHidden: () => dispatch(toggleNavHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMobile);
