import React from "react";
import PropTypes from "prop-types";
import { STROKE } from "constant";

export default function LineChartIcon({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 2.25V15.75H15.75"
        stroke={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.025 6L10.2 9.9L8.1 7.875L5.25 10.725"
        stroke={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

LineChartIcon.defaultProps = {
  width: "18",
  height: "18",
};

LineChartIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
