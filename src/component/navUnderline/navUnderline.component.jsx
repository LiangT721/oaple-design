import React, { Fragment } from "react";

import "./navUnderline.style.scss";

const NavUnderline = (props) => {
  const expand = props.expand;

  return (
    <Fragment>
      <div className="nav-underline">
        <div
          className={`${expand ? "expand" : "unexpand"} left`}
        ></div>
        <div
          className={`${expand ? "expand" : "unexpand"} right`}
        ></div>
      </div>
    </Fragment>
  );
};

export default NavUnderline;
