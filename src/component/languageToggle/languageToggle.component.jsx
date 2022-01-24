import React from "react";
import { connect } from "react-redux";

import { toggleLanguageChi, toggleLanguageEng } from "../../redux/language/language.action";

import "./languageToggle.style.scss";

const LanguageToggle = ({eng, toggleLanguageChi, toggleLanguageEng}) => {
  return (
    <div className="language-toggle-container w-100  text-center py-3 d-flex justify-content-center">
      <div 
      className={`${eng? "language-toggle-active":"language-toggle-unactive"} language-toggle-button english`}
      onClick={toggleLanguageEng}
      >English</div>
      <div>|</div>
      <div 
      className={`${eng? "language-toggle-unactive":"language-toggle-active"} language-toggle-button chinese`}
        onClick={toggleLanguageChi}>中文</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  eng: state.language.eng,
});
const mapDispatchToProps = (dispatch) => ({
  toggleLanguageChi: () => dispatch(toggleLanguageChi()),
  toggleLanguageEng: () => dispatch(toggleLanguageEng()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageToggle);
