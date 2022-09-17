import React from "react";
import PropTypes from "prop-types";
import { STROKE } from "constant";

export default function ArrowLeftIcon({ width, height, stroke = STROKE }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.31898 3.43161C9.49472 3.60734 9.49472 3.89227 9.31898 4.068L4.83718 8.5498H14.2508C14.4993 8.5498 14.7008 8.75128 14.7008 8.9998C14.7008 9.24833 14.4993 9.4498 14.2508 9.4498H4.83718L9.31898 13.9316C9.49472 14.1073 9.49472 14.3923 9.31898 14.568C9.14324 14.7437 8.85832 14.7437 8.68258 14.568L3.43258 9.318C3.25685 9.14227 3.25685 8.85734 3.43258 8.68161L8.68258 3.43161C8.85832 3.25587 9.14324 3.25587 9.31898 3.43161Z"
        fill={stroke}
      />
    </svg>
  );
}

ArrowLeftIcon.defaultProps = {
  width: "18",
  height: "18",
};

ArrowLeftIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
};
