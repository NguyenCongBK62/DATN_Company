import React from "react";
import { STROKE } from "constant";
import PropTypes from "prop-types";

export default function DragIcon({
  width,
  height,
  customStyles,
  stroke = STROKE,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={customStyles}
    >
      <path
        d="M2.25 6H15.75"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 12H15.75"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

DragIcon.defaultProps = {
  width: "18",
  height: "18",
  customStyles: {},
};

DragIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
  customStyles: PropTypes.object,
};
