import React from "react";

import MyServiceContent from "../../component/myServiceContent/myServiceContent.component";
import MobilePageImg from "../../component/mobilePageImg/mobilePageImg.component";

import servicePageImg from '../../asset/servicePageImg.jpg'

import "./myServicePage.style.scss";

const MyServicePage = () => {
  return (
    <div className="my-service-page">
      <MobilePageImg img={servicePageImg}/>
      <div className="my-service-header page-header text-center">Service</div>
      <MyServiceContent />
    </div>
  );
};

export default MyServicePage;
