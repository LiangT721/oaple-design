import React, { Fragment } from "react";

import testPic1 from '../../asset/testPic1.jpg'
import testPic2 from '../../asset/testPic2.jpg'
import Carousel from "react-bootstrap/Carousel";

import "./landingpage.style.scss";

const Landingpage = () => {
  return (
    <Fragment>
      <div className="landingpage container-xl">
        <Carousel className="h-100">
          <Carousel.Item className='h-100' interval={1500}>
            <img
              className="slider-img d-block w-100"
              src={testPic1}
              alt="Image One"
            />
          </Carousel.Item>
          <Carousel.Item className='h-100' interval={500}>
            <img
              className="slider-img d-block w-100"
              src={testPic2}
              alt="Image Two"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </Fragment>
  );
};

export default Landingpage;
