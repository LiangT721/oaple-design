import React from "react";
import { useNavigate } from "react-router-dom";

import { Image } from "react-bootstrap";

import Button from "react-bootstrap/Button";

import "./portfolioGroupList.style.scss";

const PortfortGroupList = (props) => {
  const { projects } = props;
  console.log(projects);
  let navigate = useNavigate();
 

  return (
    <div className="portfolio-group-list container-xl mb-5">
      {projects.map((project, index) => (
        <div
          className="portfolio-container my-3 ratio ratio-4x3"
          key={index}
        >
          <Image src={project.titleImg} className="portfolio-img w-100 " />
          <div className="portfolio-title-container position-absolute top-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center">
            <Button variant="dark" className="portfolio-detail-button px-3" onClick={()=>navigate(`/portfolio/${project.id}`)}>
              Detail
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PortfortGroupList;
