import React from "react";
import PropTypes from "prop-types";

export default function SearchIcon({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.33333 2.5C4.66396 2.5 2.5 4.66396 2.5 7.33333C2.5 10.0027 4.66396 12.1667 7.33333 12.1667C10.0027 12.1667 12.1667 10.0027 12.1667 7.33333C12.1667 4.66396 10.0027 2.5 7.33333 2.5ZM1.5 7.33333C1.5 4.11167 4.11167 1.5 7.33333 1.5C10.555 1.5 13.1667 4.11167 13.1667 7.33333C13.1667 10.555 10.555 13.1667 7.33333 13.1667C4.11167 13.1667 1.5 10.555 1.5 7.33333Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7461 10.7465C10.9413 10.5513 11.2579 10.5513 11.4532 10.7465L14.3532 13.6465C14.5484 13.8418 14.5484 14.1584 14.3532 14.3537C14.1579 14.5489 13.8413 14.5489 13.6461 14.3537L10.7461 11.4537C10.5508 11.2584 10.5508 10.9418 10.7461 10.7465Z"
        fill={fill}
      />
    </svg>
  );
}

SearchIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "#DDDDDD",
};

SearchIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};
