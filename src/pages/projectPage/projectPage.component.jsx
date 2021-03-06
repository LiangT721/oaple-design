import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";

import { projects } from "../../data/projects.data";

import Image from "react-bootstrap/Image";

import Text from "../../component/text/text.component";
import ImageList from "../../component/imageList/imageList.component";
import ImageSlider from "../../component/imageSlider/imageSlider.component";

import "./projectPage.styles.scss";

const ProjectPage = ({ sliderHidden }) => {
  const param = useParams();
  const project = projects.find((item) => item.id == param.projectId);
  // const title = {
  //   date: ["date", "日期"],
  //   location: ["location", "地址"],
  //   size: ["size", "面积"],
  // };
  let navigate = useNavigate();

  console.log(sliderHidden);

  return (
    <div className="project-page container-xl position-relative p-0">
      <div className="project-title-img-container d-none d-md-block w-100">
        <Image
          src={project.titleImg}
          className="project-title-img w-100 px-4"
        />
      </div>
      {/* <div className="project-text-container text-capitalize m-5">
    <div className="d-flex">
    <Text text={title.date} />
    &nbsp;:&nbsp; <div>{project.date}</div>
    </div>
    <div className="d-flex">
    <Text text={title.location} /> &nbsp;:&nbsp;{" "}
    <Text text={project.location} />
    </div>
    <div className="d-flex">
    <Text text={title.size} /> &nbsp;:&nbsp; <div>{project.size}</div>
    </div>
  </div> */}
      <ImageList imgs={project.imgs} />
      <div className="back-btn mb-5" onClick={() => navigate(-1)}>
        <Text text={["back","返回"]} />
      </div>

      {!sliderHidden && <ImageSlider imgs={project.imgs} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sliderHidden: state.project.sliderHidden,
});

export default connect(mapStateToProps)(ProjectPage);
