import React from "react";
import { connect } from "react-redux";

const Header = ({ test }) => (
  <div className="header bg-light-gray">
    <div className="header-container bg-col1 container-xxl">
      <div className="row">
        <div className="logo-container bg-col2 col-md-4">logo</div>
        <div className="nav-container bg-col3 col-md-8">nav</div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  test: state.header.test,
});

export default connect(mapStateToProps)(Header);
