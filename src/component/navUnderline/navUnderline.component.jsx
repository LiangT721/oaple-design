import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

import "./navUnderline.style.scss";

const NavUnderline = (props) => {
  const pathname = useLocation().pathname;
  const expand = pathname.includes(props.page);

  console.log(expand);

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
