import React from "react";
import { Link } from "react-router-dom";

import Text from "../text/text.component";
import NavUnderline from "../navUnderline/navUnderline.component";

import "./navDesktop.style.scss";

const aboutUs = ["about us", "关于我们", 'aboutus'];
const myService = ["my service", "我们的服务", 'myservice'];
const portfolio = ["portfolio", "作品", 'portfolio'];
const contact = ["contact", "联系我们", 'contact'];

const NavDesktop = () => (
  <div className="nav-desktop d-none d-sm-flex h-100">
    <Link to='aboutus' className="link nav-element about-us w-auto ">
      <div className="text-container">
        <Text text={aboutUs} />
      </div>
      <NavUnderline page={aboutUs[2]} />
    </Link>
    <Link to='myservice' className="link nav-element my-service w-auto ">
      <div className="text-container">
        <Text text={myService} />
      </div>
      <NavUnderline page={myService[2]} />
    </Link>
    <Link to='portfolio' className="link nav-element portfolio w-auto ">
      <div className="text-container">
        <Text text={portfolio} />
      </div>
      <NavUnderline page={portfolio[2]} />
    </Link>
    <Link to='contact' className="link nav-element contact w-auto ">
      <div className="text-container">
        <Text text={contact} />
      </div>
      <NavUnderline page={contact[2]} />
    </Link>
  </div>
);

export default NavDesktop;
