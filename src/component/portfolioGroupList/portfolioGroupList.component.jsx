import React from "react";
import { useNavigate } from "react-router-dom";

import { Image } from "react-bootstrap";

import Button from "react-bootstrap/Button";

import "./portfolioGroupList.style.scss";

const PortfortGroupList = (props) => {
  const { projects } = props;
  console.log(projects);
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/about/`);
  };

  return (
    <div className="portfolio-group-list d-flex flex-wrap w-auto">
      {projects.map((project, index) => (
        <div
          className="portfolio-group-list-project-container position-relative my-5 "
          key={index}
        >
          <Image src={project.titleImg} className="project-img w-100 " />
          <div className="portfolio-group-list-project-title-container position-absolute top-0 left-0 w-100 h-100">
            <Button variant="dark" onClick={()=>navigate(`/portfolio/${project.id}`)}>
              Detail
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PortfortGroupList;
