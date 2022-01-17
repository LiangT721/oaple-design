import React from "react";

import "./mobilePageImg.style.scss";

const MobilePageImg = (props) => (
  <div className="mobile-page-img-container mb-5 d-md-none">
    <img src={props.img} className="mobile-page-img w-100" alt="" />
  </div>
);

export default MobilePageImg;
