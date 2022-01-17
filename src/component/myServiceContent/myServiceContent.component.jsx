import React from "react";

import { myServiceList } from "../../data/OurServiceText.data";

import "./myServiceContent.style.scss";

const MyServiceContent = () => {
  return (
    <div className="my-service-content-container my-5">
      <div className="row w-100 ps-4">
        {myServiceList.map((myService) => (
          <div className="my-service-container w-100 my-3 col" key={myService}>
            <div className="my-service-img-container d-flex justify-content-center">
              <img
                src={myService.img}
                className="my-service-img"
                alt={myService.img}
              />
            </div>
            <div className="my-service-title text-center my-3">
              {myService.title}
            </div>
            <div className="my-service-list mx-5">
              <ol>
                {myService.content.map((service, index) => (
                  <li key={index} className="my-service-list-content my-2 px-1">
                    {service}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServiceContent;
