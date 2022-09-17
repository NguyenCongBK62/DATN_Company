import React from "react";
import PropTypes from "prop-types";
import { STROKE } from "constant";

export default function MenuIcon({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 10H17.5"
        stroke={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 5H17.5"
        stroke={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 15H17.5"
        stroke={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

MenuIcon.defaultProps = {
  width: "18",
  height: "18",
};

MenuIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
