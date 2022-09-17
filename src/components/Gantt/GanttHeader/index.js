import React from "react";
import PropTypes from "prop-types";
import { LeftArrow, RightArrow } from "components/Icons/Arrows";

export default function GanttHeader({ previous, forward, label, style = {} }) {
  return (
    <div className="gantt-header" style={style}>
      <span className="header-icon" onClick={previous}>
        <LeftArrow stroke={"#fff"} />
      </span>
      <span>{label}</span>

      <span className="header-icon" onClick={forward}>
        <RightArrow stroke={"#fff"} />
      </span>
    </div>
  );
}

GanttHeader.propTypes = {
  previous: PropTypes.func,
  forward: PropTypes.func,
  label: PropTypes.any,
  style: PropTypes.object,
};
