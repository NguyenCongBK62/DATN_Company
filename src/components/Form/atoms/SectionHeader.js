import React from "react";
import PropTypes from "prop-types";
import { Divider } from "antd";

function SectionHeader({ label }) {
  return (
    <div className="form-section-header">
      <h2>{label}</h2>
      <Divider style={{ background: "#D8D8D8", marginTop: 10 }} />
    </div>
  );
}

SectionHeader.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SectionHeader;
