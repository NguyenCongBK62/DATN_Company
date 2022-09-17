import React from "react";
import PropTypes from "prop-types";
import { STROKE } from "constant";

export default function ChevronRightIcon({ width, height, stroke }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

ChevronRightIcon.defaultProps = {
  width: "24",
  height: "24",
  stroke: STROKE,
};

ChevronRightIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
};
