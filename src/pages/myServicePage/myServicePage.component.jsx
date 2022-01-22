import React from "react";

import MyServiceContent from "../../component/myServiceContent/myServiceContent.component";
import MobilePageImg from "../../component/mobilePageImg/mobilePageImg.component";
import Text from "../../component/text/text.component";

import servicePageImg from '../../asset/servicePageImg.jpg'

import "./myServicePage.style.scss";

const MyServicePage = () => {

  const title = ['My Service',]
  
  return (
    <div className="my-service-page container-xl">
      <MobilePageImg img={servicePageImg}/>
      <div className="my-service-header page-header text-center">
        <Text text={title} />
      </div>
      <MyServiceContent />
    </div>
  );
};

export default MyServicePage;
