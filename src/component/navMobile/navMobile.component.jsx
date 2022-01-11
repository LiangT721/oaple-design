import React from "react";
import upIcon from "../../asset/chevron-double-up.svg";

import { toggleNavHidden } from "../../redux/header/header.action";

import { connect } from "react-redux";

import "./navMobile.style.scss";

const NavMobile = ({NavHidden, toggleNavHidden}) => (
  <div className="nav d-flex justify-content-center d-sm-none">
    <div 
      className={`${NavHidden? "fold":"unfold"} menu-container w-100 text-center pb-3`}
    >
        <div className="about-us border-bottom fs-1">about us</div>
        <div className="my-service border-bottom fs-1">my service</div>
        <div className="portfolio border-bottom fs-1">portfolio</div>
        <div className="contact border-bottom fs-1">contact</div>
    </div>
    <div className="nav-icon">
      <img src={upIcon} className={`${NavHidden? "down":""} upIcon text-dark`} 
        onClick={toggleNavHidden}
        alt=""  />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  NavHidden: state.header.NavHidden
})

const mapDispatchToProps = (dispatch) => ({
  toggleNavHidden: () => dispatch(toggleNavHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(NavMobile);
