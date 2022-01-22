import React from "react";

import Image from "react-bootstrap/Image";
import { connect } from "react-redux";

import { appearSlider, setSliderIndex } from "../../redux/project/project.action";

import "./imageList.style.scss";

const ImageList = ({imgs, appearSlider}) => {
 console.log(imgs)
  return (
    <div className="image-list-container container-xl mb-5">
        {imgs.map((img,index) => (
          <div className="img-container my-3 ratio ratio-4x3" key={index}>
          <div>{index}</div>
              <Image src={img} className="project-img"
              onClick={()=>appearSlider(index)}
              />
          </div>
        ))}
    </div>
  );
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  appearSlider: (index) => {
    console.log(index)
    dispatch(setSliderIndex(index))
    dispatch(appearSlider());
  },
  imgs:ownProps.imgs
})

export default connect(null, mapDispatchToProps)(ImageList);
