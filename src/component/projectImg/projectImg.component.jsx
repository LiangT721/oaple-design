import React from "react";

import "./projectImg.sytle.scss";

const ProjectImg = ({img}) => {
    console.log(img)
    return(
        <div className="project-img">
            <img src={img} alt="" />
        </div>
    )
}
export default ProjectImg;