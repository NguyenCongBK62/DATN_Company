import React from "react";
import PropTypes from "prop-types";
import { STROKE } from "constant";

export default function CloseIcon({ width, height, stroke = STROKE }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 7.5L7.5 22.5"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 7.5L22.5 22.5"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

CloseIcon.defaultProps = {
  width: "30",
  height: "30",
};

CloseIcon.propTypes = {
  width: PropTypes.any,
  height: PropTypes.any,
  stroke: PropTypes.string,
};
