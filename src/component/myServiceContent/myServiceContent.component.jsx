import React from "react";

import { design, technical, applicatio } from "../../data/OurServiceText.data";
import designImg from "../../asset/design.jpg";

import "./myServiceContent.style.scss";

const MyServiceContent = () => {
  return (
    <div className="my-service-content-container">
      <div className="row">
        <div className="my-service-img w-100">
          <img src={designImg} className="w-75" alt="" />
        </div>
        <div className="my-service-text-container">
            <div className="my-service-text-title text-center mt-4">{design.title}</div>
            {
                design.content.map((service,index)=>(
                    <div className="service text-center mt-3"
                    key={service}
                    >{index+1}. {service}</div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default MyServiceContent;
