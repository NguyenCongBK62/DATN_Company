import React from "react";
import { STROKE } from "constant";
import PropTypes from "prop-types";

export default function QuestionMarkIcon({
  width,
  height,
  stroke = STROKE,
  inputProps,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...inputProps}
    >
      <circle cx="11" cy="12" r="11" fill={stroke} />
      <path
        d="M10.088 13.916H11.636C11.456 12.248 14.072 12.044 14.072 10.28C14.072 8.684 12.8 7.88 11.06 7.88C9.776 7.88 8.72 8.456 7.964 9.344L8.948 10.256C9.5 9.632 10.124 9.308 10.868 9.308C11.804 9.308 12.38 9.716 12.38 10.436C12.38 11.6 9.836 12.032 10.088 13.916ZM9.62 15.92C9.62 16.616 10.148 17.108 10.868 17.108C11.588 17.108 12.116 16.616 12.116 15.92C12.116 15.224 11.588 14.744 10.868 14.744C10.148 14.744 9.62 15.224 9.62 15.92Z"
        fill="white"
      />
    </svg>
  );
}

QuestionMarkIcon.defaultProps = {
  width: "22",
  height: "24",
};

QuestionMarkIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
  inputProps: PropTypes.any,
};
