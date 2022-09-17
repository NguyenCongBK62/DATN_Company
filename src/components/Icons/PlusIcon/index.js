import React from "react";
import PropTypes from "prop-types";

export default function PlusIcon({
  width,
  height,
  customStyles,
  stroke = "white",
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 0C7.48325 0 7.875 0.391751 7.875 0.875V13.125C7.875 13.6082 7.48325 14 7 14C6.51675 14 6.125 13.6082 6.125 13.125V0.875C6.125 0.391751 6.51675 0 7 0Z"
        fill={stroke}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7C0 6.51675 0.391751 6.125 0.875 6.125H13.125C13.6082 6.125 14 6.51675 14 7C14 7.48325 13.6082 7.875 13.125 7.875H0.875C0.391751 7.875 0 7.48325 0 7Z"
        fill={stroke}
      />
    </svg>
  );
}

PlusIcon.defaultProps = {
  width: "14",
  height: "14",
  customStyles: {},
};

PlusIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
  customStyles: PropTypes.object,
};
