import React from "react";
import PropTypes from "prop-types";
import { STROKE } from "constant";

export default function DashboardIcon({ width, height, stroke = STROKE }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8.75" cy="8.75" r="7.25" stroke={stroke} />
      <path
        d="M7.99063 9.89836C8.63403 10.5418 9.583 10.636 10.1102 10.1088C10.6374 9.58154 10.5432 8.63258 9.89982 7.98918C9.25642 7.34577 5.21728 5.21582 5.21728 5.21582C5.21728 5.21582 7.34723 9.25496 7.99063 9.89836Z"
        stroke={stroke}
        strokeLinejoin="round"
      />
      <line
        x1="8.80078"
        y1="3.3999"
        x2="8.80078"
        y2="4.1999"
        stroke={stroke}
        strokeLinecap="round"
      />
      <line
        x1="14.0996"
        y1="8.7998"
        x2="13.2996"
        y2="8.7998"
        stroke={stroke}
        strokeLinecap="round"
      />
      <line
        x1="12.2734"
        y1="5.4073"
        x2="11.7078"
        y2="5.97299"
        stroke={STROKE}
        strokeLinecap="round"
      />
      <line
        x1="4.19922"
        y1="8.7998"
        x2="3.39922"
        y2="8.7998"
        stroke={stroke}
        strokeLinecap="round"
      />
    </svg>
  );
}

DashboardIcon.defaultProps = {
  width: "18",
  height: "18",
};

DashboardIcon.propTypes = {
  width: PropTypes.any,
  height: PropTypes.any,
  stroke: PropTypes.string,
};
