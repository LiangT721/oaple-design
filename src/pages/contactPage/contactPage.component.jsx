import React, { useEffect } from "react";
import location from "../../asset/location.png";

import Image from "react-bootstrap/Image";
import MobilePageImg from "../../component/mobilePageImg/mobilePageImg.component";

// import GoogleMapDiv from "../../component/map/map.component";
import servicePageImg from "../../asset/servicePageImg.jpg";

import ContactText from "../../component/contactText/contactText.component";
import Text from "../../component/text/text.component";

import "./contactPage.style.scss";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);
  const title = ["Contact Us", "联系我们"];
  return (
    <div className="container-xl p-0">
      <MobilePageImg img={servicePageImg} />
      <div className="my-service-header page-header text-center">
        <Text text={title} />
      </div>
      <div className="contact-map d-none d-md-block my-5">
        <Image className="map-img h-100 w-100" src={location} />
      </div>
      <div className="contact-text">
        <ContactText />
      </div>
    </div>
  );
};

export default ContactPage;
