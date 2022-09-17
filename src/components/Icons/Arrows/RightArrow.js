import React from "react";
import PropTypes from "prop-types";
import { STROKE } from "constant";

export default function RightArrow({ width, height, stroke = STROKE }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646448 1.35355C0.451185 1.15829 0.451185 0.841709 0.646448 0.646446C0.84171 0.451184 1.15829 0.451184 1.35355 0.646446L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536Z"
        fill={stroke}
      />
    </svg>
  );
}

RightArrow.defaultProps = {
  width: "8",
  height: "14",
};

RightArrow.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
};
