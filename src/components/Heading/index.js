import React from "react";
import PropTypes from "prop-types";
import "./style/index.less";

export default function Heading({ children, classes = "custom-heading" }) {
  return <div className={classes}>{children}</div>;
}

Heading.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.string,
};
