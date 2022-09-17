import React from "react";
import PropTypes from "prop-types";
import "components/FormHeader/style/index.less";

function FormHeader({ title, icon }) {
  return (
    <div className="form-header">
      <div>{icon}</div>
      <span>{title}</span>
    </div>
  );
}

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

export default FormHeader;
