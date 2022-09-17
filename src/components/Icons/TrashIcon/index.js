import React from "react";
import { STROKE } from "constant";
import PropTypes from "prop-types";

export default function TrashIcon({
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
      <path d="M2.25 4.5H3.75H15.75" stroke={stroke} strokeWidth="1" />
      <path
        d="M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z"
        stroke={stroke}
        strokeWidth="1"
      />
      <path d="M7.5 8.25V12.75" stroke={stroke} strokeWidth="1" />
      <path d="M10.5 8.25V12.75" stroke={stroke} strokeWidth="1" />
    </svg>
  );
}

TrashIcon.defaultProps = {
  width: "18",
  height: "18",
  customStyles: {},
};

TrashIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
  customStyles: PropTypes.object,
};
