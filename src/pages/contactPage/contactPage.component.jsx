import React, { Fragment } from "react";

import GoogleMapDiv from "../../component/map/map.component";
import ContactText from "../../component/contactText/contactText.component";
import Footer from "../../component/footer/footer.component";


import "./contactPage.style.scss";

const ContactPage = () => {

  return (
    <Fragment>
      <div className="contact-map h-sm-30vh bg-color1">
        <GoogleMapDiv />
      </div>
      <div className="contact-text">
        <ContactText />
      </div>
      <Footer />
    </Fragment>
  );
};

export default ContactPage;
