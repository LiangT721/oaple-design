import React from "react";
import { Image } from "react-bootstrap";

import MobilePageImg from "../../component/mobilePageImg/mobilePageImg.component";
import Text from "../../component/text/text.component";

import aboutUsPageImg from "../../asset/aboutUsPageImg.jpg";
import { aboutUsContent } from "../../data/aboutUsText.data";

import "./aboutUsPage.style.scss";

const AboutUsPage = () => {
  const title = ["About Us", "关于我们"];

  return (
    <div className="container-xl">
      <MobilePageImg img={aboutUsPageImg} />
      <div className="my-service-header page-header text-center">
        <Text text={title} />
      </div>
      <div className="about-us-content-container pt-3 pb-5 px-5">
        <div className="row">
          <div className="about-us-content about-us-text-part1 order-md-3 col-md-6">
            <Text text={aboutUsContent.p1} />
          </div>
          <div className="order-md-2 col-md-1"></div>
          <div className="about-us-content about-us-content-img order-md-1 col-md-5">
            <Image
              src={aboutUsContent.img}
              className="about-us-content-img w-100"
            ></Image>
          </div>
          <div className="about-us-content about-us-text-part2 order-md-4 ">
            <Text text={aboutUsContent.p2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
