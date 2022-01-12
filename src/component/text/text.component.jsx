import React, { Fragment } from "react";
import { connect } from "react-redux";

import "./text.style.scss";

const Text = ({eng, text}) => (
    <Fragment>
        {
            eng? <div className="text">{text[0]}</div>:<div className="text">{text[1]}</div>
        }
    </Fragment>
)

const mapStateToProps = (state, ownProps) => ({
    eng: state.header.eng,
    text: ownProps.text
})

export default connect(mapStateToProps)(Text);