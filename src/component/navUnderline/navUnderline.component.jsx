import React, { Fragment } from "react";

import "./navUnderline.style.scss";

const NavUnderline = (props) => {

  const pathname = window.location.pathname
  const expand = pathname.includes(props.page)

  console.log(expand)

  return (
    <Fragment>
      <div className={`${expand? "expand":"unexpand"} nav-underline`}></div>
    </Fragment>
  );
};

export default NavUnderline;
