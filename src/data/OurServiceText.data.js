import designImg from "../asset/design.jpg";
import technicalImg from "../asset/techincal.jpg";
import applicationImg from "../asset/applications.jpg";
import reviewImg from "../asset/review.png";

const design = {
  title: ["DESIGN"],
  content: [
    ["Client Consultations"],
    ["Concept Drawings"],
    ["Proposal Drawings"],
  ],
  img: designImg,
};

const technical = {
  title: ["TECHNICAL"],
  content: [
    ["Architectural Working Drawings"],
    ["HVAC, Structural, Survey, Geo-Technical, Septic System"],
    ["Drawing Coordination Of Consultants"],
    ["Measured Drawings (Existing Buildings)"],
    ["Exterior Finishing Schedule"],
  ],
  img: technicalImg,
};

const application = {
  title: ["APPLICATIONS"],
  content: [
    ["Building Permit"],
    ["Site Plan Approval"],
    ["Site Alteration Approval"],
    ["Zoning Clearance / Compliance"],
    ["Committee of Adjustment – Application & Hearing"],
    ["NEC, CVC, TRCA and Other Regional Applications"],
    ["Consent Application (Lot Severance)"],
  ],
  img: applicationImg,
};

const review = {
  title: ["REVIEW"],
  content: [
    ["Building Material Specifications"],
    ["Contractors Bids / Quotations"],
    ["Contractors Documents and Specifications"],
    ["Site Visits throughout the Construction Process"],
    ["Site Inspection and Compliance Letters"],
  ],
  img: reviewImg,
};

export const myServiceList = [design, technical, application, review];
