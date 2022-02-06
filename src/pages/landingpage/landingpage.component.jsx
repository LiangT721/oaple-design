import React, { Fragment } from "react";

import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";

import "./landingpage.style.scss";

import {
  landingPageSlider,
  landingPageSliderM,
} from "../../data/landingPageSlider";

import project_1_cover from "../../asset/slider/project_1_cover.jpg";

const Landingpage = () => {
  console.log(window.innerWidth);
  let slider;

  if (window.innerWidth > 768) {
    slider = landingPageSlider;
  } else {
    slider = landingPageSliderM;
  }

  console.log(slider);

  return (
    <Fragment>
      <div className="landingpage container-md p-0">
        <Carousel>
          {slider.map((titleImg) => (
            <Carousel.Item className="landingPage-carousel">
              <div className="landingPage-slider-div">
                <Image
                  src={titleImg}
                  className="landingPage-slider-img"
                />
              </div>
            </Carousel.Item>
          ))}
          {
            //   slider.map((titleImg) => (
            //   <Carousel.Item key={titleImg} className="">
            //     <div className="slider-img-div">
            //       <img
            //         className="slider-img d-block w-100"
            //         src={titleImg}
            //         alt="Image One"
            //       />
            //     </div>
            //   </Carousel.Item>
            // ))
          }
        </Carousel>
      </div>
    </Fragment>
  );
};

export default Landingpage;
