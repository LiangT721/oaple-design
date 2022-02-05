import React, {useEffect} from "react";
import { Image } from "react-bootstrap";

import MobilePageImg from "../../component/mobilePageImg/mobilePageImg.component";
import Text from "../../component/text/text.component";

import servicePageImg  from "../../asset/servicePageImg.jpg";
import { aboutUsContent } from "../../data/aboutUsText.data";

import "./aboutUsPage.style.scss";

const AboutUsPage = () => {
  const title = ["About Us", "关于我们"];
  useEffect(() => {
        document.title = 'About Us'
    }, []);
  return (
    <div className="container-xl p-0">
      <MobilePageImg img={servicePageImg} />
      <div className="my-service-header page-header text-center">
        <Text text={title} />
      </div>
      <div className="about-us-content-container pt-3 pb-5 px-5">
        <div className="row">
          <div className="about-us-content about-us-text-part1 order-lg-3 col-lg-6">
            <Text text={aboutUsContent.p1} />
          </div>
          <div className="order-lg-2 col-lg-1"></div>
          <div className="about-us-content about-us-content-img order-lg-1 col-lg-5 d-none d-lg-block">
            <Image
              src={aboutUsContent.img}
              className="about-us-content-img w-100"
            ></Image>
          </div>
          <div className="about-us-content about-us-text-part2 order-lg-4 ">
            <Text text={aboutUsContent.p2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
