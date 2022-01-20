import React from "react";

import { Image } from "react-bootstrap";
import Text from "../text/text.component";

import "./portfolioGroupList.style.scss";

const PortfortGroupList = (props) => {
  const { projects } = props;
  console.log(projects);
  return (
    <div className="portfolio-group-list d-flex flex-wrap w-auto">
      {projects.map((project, index) => (
        <div
          className="portfolio-group-list-project-container position-relative my-5 "
          key={index}
        >
            <Image src={project.titleImg} className="project-img w-100 " />
          <div className="portfolio-group-list-project-title-container position-absolute top-0 left-0 w-100 h-100">
            <div className="portfolio-group-list-project-text-container">
              <Text text={project.name} color={"text-white"} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PortfortGroupList;
