import React, { useEffect } from "react";
import location from '../../asset/location.png';

import Image from "react-bootstrap/Image";
// import GoogleMapDiv from "../../component/map/map.component";
import ContactText from "../../component/contactText/contactText.component";


import "./contactPage.style.scss";

const ContactPage = () => {
  useEffect(() => {
        document.title = 'Contact Us'
    }, []);
  return (
    <div className="container-xl p-0">
      <div className="contact-map">
        <Image className="map-img h-100 w-100" src={location} />
      </div>
      <div className="contact-text">
        <ContactText />
      </div>
    </div>
  );
};

export default ContactPage;
