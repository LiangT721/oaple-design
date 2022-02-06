import React from "react";

import { myServiceList } from "../../data/OurServiceText.data";
import Text from '../text/text.component';

import "./myServiceContent.style.scss";

const MyServiceContent = () => {
  return (
    <div className="my-service-content-container mt-5">
        {myServiceList.map((myService) => (
          <div className="my-service-container" key={myService}>
            <div className="my-service-img-container justify-content-center ratio ratio-4x3">
              <img
                src={myService.img}
                className="my-service-img"
                alt={myService.img}
              />
            </div>
            <div className="my-service-title text-center my-3">
              <Text text={myService.title} />
            </div>
            <div className="my-service-list">
              <ol>
                {myService.content.map((service, index) => (
                  <li key={index} className="my-service-list-content my-2 px-1">
                    <Text text={service} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MyServiceContent;
