import React from "react";
import PropTypes from "prop-types";

function Label({ required = true, label }) {
  return (
    <div className="input-label">
      {required ? <span className="input-label-tag">必須</span> : null}
      <span className="input-label-text">{label}</span>
    </div>
  );
}

Label.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

export default Label;
