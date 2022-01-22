import React,{ useState } from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";

import { hideSlider } from "../../redux/project/project.action";
import "./imageSlider.style.scss";

const ImageSlider = ({sliderIndex,imgs,hideSlider}) => {
    console.log(sliderIndex)
    console.log(imgs)
    const [index, setIndex] = useState(sliderIndex);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

  return (
    <div className="image-slider position-fixed">
      <div className="cross">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={hideSlider}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="slider-container d-flex justify-content-center align-items-center h-100">
      <Carousel className="slider-img" activeIndex={index} onSelect={handleSelect}>
        {imgs.map((img)=>(
            <Carousel.Item className='h-100'>
            <img
              className="slider-img d-block w-100"
              src={img}
              alt="Image One"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
    
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  sliderIndex: state.project.sliderIndex,
  imgs: ownProps.imgs,
});

const mapDispatchToProps = (dispatch) => ({
    hideSlider: ()=>{dispatch(hideSlider())}
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageSlider);
