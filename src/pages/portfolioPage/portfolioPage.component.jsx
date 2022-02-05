import React, {useEffect} from "react";

import { connect } from "react-redux";


import MobilePageImg from "../../component/mobilePageImg/mobilePageImg.component";
import Text from "../../component/text/text.component";
import PortfortGroupList from "../../component/portfolioGroupList/portfolioGroupList.component";
import NavUnderline from "../../component/navUnderline/navUnderline.component";

import {
  toggleProjectCategory1,
  toggleProjectCategory2,
} from "../../redux/project/project.action";

import servicePageImg  from "../../asset/servicePageImg.jpg";

import { projectGroup1, projectGroup2 } from "../../data/portfolioGroup.data";

import "./portfolioPage.style.scss";

const PortfolioPage = ({ projectCategory,toggleProjectCategory1,toggleProjectCategory2 }) => {
  // const title = ["Projects", "项目案例"];
  const subTitle1 = ["House", "民用住宅"];
  const subTitle2 = ["Commercial", "商业项目"];
  useEffect(() => {
        document.title = 'Projects'
    }, []);

  return (
    <div className="container-xl p-0">
      <MobilePageImg img={servicePageImg} />
     {/* <div className="my-service-header page-header text-center">
        <Text text={title} />
  </div> */}
      <div className="my-service-subtitle-container d-flex justify-content-evenly m-5 justify-content-md-end">
        <div className={`${projectCategory? "":"unselect"}  mx-3`}
          onClick={toggleProjectCategory1}>
          <Text text={subTitle1} />
          <NavUnderline expand={projectCategory} />
        </div>
        <div className={`${!projectCategory? "":"unselect"} my-service-subtitle mx-3`}
          onClick={toggleProjectCategory2}>
          <Text text={subTitle2} />
          <NavUnderline expand={!projectCategory} />
        </div>
      </div>
      <PortfortGroupList projects={projectCategory? projectGroup1: projectGroup2} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleProjectCategory1: () => dispatch(toggleProjectCategory1()),
  toggleProjectCategory2: () => dispatch(toggleProjectCategory2()),
});

const mapStateToProps = (state) => ({
  projectCategory: state.project.projectCategory,
});


export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);
