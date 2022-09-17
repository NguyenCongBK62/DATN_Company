import React from "react";
import PropTypes from "prop-types";
import { STROKE } from "constant";

export default function MonitorIcon({ width, height, customStyles }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={customStyles}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.66732 3.25C2.93094 3.25 2.33398 3.84695 2.33398 4.58333V13.75C2.33398 14.4864 2.93094 15.0833 3.66732 15.0833H18.334C19.0704 15.0833 19.6673 14.4864 19.6673 13.75V4.58333C19.6673 3.84695 19.0704 3.25 18.334 3.25H3.66732ZM1.33398 4.58333C1.33398 3.29467 2.37865 2.25 3.66732 2.25H18.334C19.6227 2.25 20.6673 3.29467 20.6673 4.58333V13.75C20.6673 15.0387 19.6227 16.0833 18.334 16.0833H3.66732C2.37865 16.0833 1.33398 15.0387 1.33398 13.75V4.58333Z"
        fill={STROKE}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.83398 19.25C6.83398 18.9739 7.05784 18.75 7.33398 18.75H14.6673C14.9435 18.75 15.1673 18.9739 15.1673 19.25C15.1673 19.5261 14.9435 19.75 14.6673 19.75H7.33398C7.05784 19.75 6.83398 19.5261 6.83398 19.25Z"
        fill={STROKE}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 15.0835C11.2761 15.0835 11.5 15.3074 11.5 15.5835V19.2502C11.5 19.5263 11.2761 19.7502 11 19.7502C10.7239 19.7502 10.5 19.5263 10.5 19.2502V15.5835C10.5 15.3074 10.7239 15.0835 11 15.0835Z"
        fill={STROKE}
      />
    </svg>
  );
}

MonitorIcon.defaultProps = {
  width: "18",
  height: "18",
  customStyles: {},
};

MonitorIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  customStyles: PropTypes.object,
};
