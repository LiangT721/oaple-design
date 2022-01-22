import React, { Fragment } from "react";

import GoogleMapDiv from "../../component/map/map.component";
import ContactText from "../../component/contactText/contactText.component";


import "./contactPage.style.scss";

const ContactPage = () => {

  return (
    <div className="container-xl">
      <div className="contact-map h-sm-30vh">
        <GoogleMapDiv />
      </div>
      <div className="contact-text">
        <ContactText />
      </div>
    </div>
  );
};

export default ContactPage;
