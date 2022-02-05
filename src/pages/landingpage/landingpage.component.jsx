import React, { Fragment } from "react";

import Carousel from "react-bootstrap/Carousel";

import "./landingpage.style.scss";

import {projects} from '../../data/projects.data';

const Landingpage = () => {
  return (
    <Fragment>
      <div className="landingpage container-xl p-0">
        <Carousel className="h-100">
          {
            projects.map((project)=>(
              <Carousel.Item className='h-100' >
                <img
                  className="slider-img d-block w-100"
                  src={project.titleImg}
                  alt="Image One"
                />
              </Carousel.Item>

            ))
          }
          
          
        </Carousel>
      </div>
    </Fragment>
  );
};

export default Landingpage;
