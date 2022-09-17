import React from "react";
import PropTypes from "prop-types";
import { STROKE } from "constant";

export default function CalendarIcon({ width, height, stroke, type = "sm" }) {
  if (type === "sm") {
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${height} ${width}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.25 3H3.75C2.92157 3 2.25 3.67157 2.25 4.5V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V4.5C15.75 3.67157 15.0784 3 14.25 3Z"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 1.5V4.5"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 1.5V4.5"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.25 7.5H15.75"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${height} ${width}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.1667 4.66669H5.83333C4.54467 4.66669 3.5 5.71136 3.5 7.00002V23.3334C3.5 24.622 4.54467 25.6667 5.83333 25.6667H22.1667C23.4553 25.6667 24.5 24.622 24.5 23.3334V7.00002C24.5 5.71136 23.4553 4.66669 22.1667 4.66669Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.666 2.33331V6.99998"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33398 2.33331V6.99998"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 11.6667H24.5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

CalendarIcon.defaultProps = {
  width: "18",
  height: "18",
  stroke: STROKE,
};

CalendarIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
  type: PropTypes.string,
};
