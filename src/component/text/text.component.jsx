import React, { Fragment } from "react";
import { connect } from "react-redux";

import "./text.style.scss";

const Text = ({eng, text, color}) => (
    <Fragment>
        {
            eng? <div className={`${color? color:""} text`}>{text[0]}</div>:<div className={`${color? color:""} text`}>{text[1]}</div>
        }
    </Fragment>
)

const mapStateToProps = (state, ownProps) => ({
    eng: state.language.eng,
    text: ownProps.text,
    color: ownProps.color
})

export default connect(mapStateToProps)(Text);