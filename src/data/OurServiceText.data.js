import designImg from "../asset/design.jpg";
import technicalImg from "../asset/techincal.jpg";
import applicationImg from "../asset/applications.jpg";
import reviewImg from "../asset/review.png";

const design = {
  title: ["DESIGN", "设计"],
  content: [
    ["Client Consultations", "客户咨询"],
    ["Concept Drawings", "概念设计"],
    ["Proposal Drawings", "方案设计"],
  ],
  img: designImg,
};

const technical = {
  title: ["TECHNICAL", "技术"],
  content: [
    ["Architectural Working Drawings", "建筑施工图"],
    [
      "HVAC, Structural, Site Survey, Geo-Technical, hydrogeological and Environmental Assessment",
      "暖通空调、结构、场地调查、地质、水文与环境评估",
    ],
    ["Measured Drawings (Existing Buildings)", "测绘图纸"],
    ["Exterior Finishing Schedule", "外部装修表"],
  ],
  img: technicalImg,
};

const application = {
  title: ["APPLICATIONS", "申请"],
  content: [
    ["Building Permit", "建筑许可证申请"],
    ["Site Plan Approval", "场地规划批准"],
    ["Site Alteration Approval", "场地变更批准"],
    ["Zoning Clearance", "区域规划证书"],
    ["Committee of Adjustment – Application & Hearing", "听证会"],
    ["TRCA and Other Regional Applications", "TRCA 以及其它区域专项申请"],
  ],
  img: applicationImg,
};

const review = {
  title: ["REVIEW", "审查"],
  content: [
    [
      "Site Visits throughout the Construction Process",
      "施工全过程的项目场地考察",
    ],
    ["Site Inspection and Compliance Letters", "现场检查和合规信函"],
  ],
  img: reviewImg,
};

export const myServiceList = [design, technical, application, review];
