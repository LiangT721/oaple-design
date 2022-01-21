import React, { Fragment } from "react";
import { connect } from "react-redux";


import MobilePageImg from "../../component/mobilePageImg/mobilePageImg.component";
import Text from "../../component/text/text.component";
import PortfortGroupList from "../../component/portfolioGroupList/portfolioGroupList.component";
import NavUnderline from "../../component/navUnderline/navUnderline.component";

import {
  toggleProjectCategory1,
  toggleProjectCategory2,
} from "../../redux/project/project.action";

import portfolioPageImg from "../../asset/PortfolioPageImg.jpg";
import { projectGroup1, projectGroup2 } from "../../data/portfolioGroup.data";

import "./portfolioPage.style.scss";

const PortfolioPage = ({ projectCategory,toggleProjectCategory1,toggleProjectCategory2 }) => {
  const title = ["Portfolio", "作品"];
  const subTitle1 = ["Category-1", "分类1"];
  const subTitle2 = ["Category-2", "分类2"];

  return (
    <Fragment>
      <MobilePageImg img={portfolioPageImg} />
      <div className="my-service-header page-header text-center">
        <Text text={title} />
      </div>
      <div className="my-service-subtitle-container d-flex justify-content-evenly m-5">
        <div className={`${projectCategory? "":"unselect"} my-service-subtitle`}
          onClick={toggleProjectCategory1}>
          <Text text={subTitle1} />
          <NavUnderline expand={projectCategory} />
        </div>
        <div className={`${!projectCategory? "":"unselect"} my-service-subtitle`}
          onClick={toggleProjectCategory2}>
          <Text text={subTitle2} />
          <NavUnderline expand={!projectCategory} />
        </div>
      </div>
      <PortfortGroupList projects={projectCategory? projectGroup1: projectGroup2} />
    </Fragment>
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
