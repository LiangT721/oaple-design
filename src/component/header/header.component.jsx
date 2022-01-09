import React from "react";
import { connect } from 'react-redux';

const Header = ({test}) => (
   <div className="header text-primary">
   Public header
   {test}
   </div>
)

const mapStateToProps = state => ({
   test: state.header.test
})


export default connect(mapStateToProps)(Header);