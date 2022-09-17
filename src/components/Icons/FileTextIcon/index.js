import React from "react";
import PropTypes from "prop-types";
import { STROKE } from "constant";

export default function FileTextIcon({
  width,
  height,
  customStyles,
  stroke = STROKE,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={customStyles}
    >
      <path
        d="M10.5 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V15C3 15.825 3.675 16.5 4.5 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V6L10.5 1.5Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9.75H6M12 12.75H6M7.5 6.75H6M11 2V5.75H14.75L11 2Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

FileTextIcon.defaultProps = {
  width: "18",
  height: "18",
  customStyles: {},
};

FileTextIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  customStyles: PropTypes.object,
  stroke: PropTypes.string,
};
