import React from "react";
import PropTypes from "prop-types";
import { STROKE } from "constant";

export default function ExternalLinkIcon({
  width,
  height,
  stroke = STROKE,
  inputProps = {},
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...inputProps}
    >
      <path
        d="M12 9.33333V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.6 2.6 4 3.33333 4H6.66667M10 2H14V6M6.66667 9.33333L13.4667 2.53333"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

ExternalLinkIcon.defaultProps = {
  width: "18",
  height: "18",
};

ExternalLinkIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
  inputProps: PropTypes.any,
};
