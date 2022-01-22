import React from "react";

import Image from "react-bootstrap/Image";

import "./imageList.style.scss";

const ImageList = (props) => {
  const { imgs } = props;
  console.log(imgs);
  return (
    <div className="image-list-container container-xl mb-5">
        {imgs.map((img, index) => (
          <div className="img-container my-3 ratio ratio-4x3" key={index}>
              <Image src={img} className="project-img" />
          </div>
        ))}
    </div>
  );
};

export default ImageList;
