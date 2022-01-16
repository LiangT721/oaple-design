import React from "react";

import MyServiceContent from "../../component/myServiceContent/myServiceContent.component";

import "./myServicePage.style.scss";

const MyServicePage = () => {
  return (
    <div className="my-service-page">
      <div className="my-service-header page-header text-center">Service</div>
      <MyServiceContent />
    </div>
  );
};

export default MyServicePage;
