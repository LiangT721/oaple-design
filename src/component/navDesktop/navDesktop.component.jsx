import React from "react";
import { Link, useLocation } from "react-router-dom";


import Text from "../text/text.component";
import NavUnderline from "../navUnderline/navUnderline.component";
import LanguageToggle from "../languageToggle/languageToggle.component";

import "./navDesktop.style.scss";

const aboutUs = ["about us", "关于我们", 'aboutus'];
const myService = ["my service", "我们的服务", 'myservice'];
const portfolio = ["Projects", "项目案例", 'portfolio'];
const contact = ["contact", "联系我们", 'contact'];

const NavDesktop = () => {
  const pathname = useLocation().pathname;
  console.log(pathname.includes(aboutUs[2]))
  return(
  <div className="nav-desktop d-none d-lg-flex h-100">
    <Link to='aboutus' className="link nav-element about-us w-auto ">
      <div className="text-container">
        <Text text={aboutUs} />
      </div>
      <NavUnderline expand={pathname.includes(aboutUs[2])} />
    </Link>
    <Link to='myservice' className="link nav-element my-service w-auto ">
      <div className="text-container">
        <Text text={myService} />
      </div>
      <NavUnderline expand={pathname.includes(myService[2])} />
    </Link>
    <Link to='portfolio' className="link nav-element portfolio w-auto ">
      <div className="text-container">
        <Text text={portfolio} />
      </div>
      <NavUnderline expand={pathname.includes(portfolio[2])} />
    </Link>
    <Link to='contact' className="link nav-element contact w-auto ">
      <div className="text-container">
        <Text text={contact} />
      </div>
      <NavUnderline expand={pathname.includes(contact[2])} />
    </Link>
    <div className="desktop-toggle-container w-auto ms-5">
    <LanguageToggle />
    </div>

  </div>
)};

export default NavDesktop;
