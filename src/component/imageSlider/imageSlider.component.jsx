import React from "react";
import { connect } from "react-redux";
import  Image from "react-bootstrap/Image";
import { hideSlider } from "../../redux/project/project.action";
import "./imageSlider.style.scss";

const ImageSlider = ({sliderIndex,imgs,hideSlider}) => {
    console.log(sliderIndex)
    console.log(imgs)
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
      <Image src={imgs[sliderIndex]} className="slider-img" />
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
