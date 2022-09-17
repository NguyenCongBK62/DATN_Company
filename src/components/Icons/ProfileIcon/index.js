import React from "react";
import PropTypes from "prop-types";

export default function ProfileIcon({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="21" cy="21" r="21" fill="#EFEFEF" />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="42"
        height="42"
      >
        <circle cx="21" cy="21" r="20.5" fill="white" stroke="black" />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M28.2374 34.2706C26.8739 33.7609 24.8851 32.2718 24.8851 31.3451V28.912C25.6732 28.0351 26.2723 26.2553 26.6285 24.2376C27.4591 23.9411 27.9338 23.4663 28.5269 21.39C29.1574 19.178 27.5777 19.2531 27.5777 19.2531C28.8551 15.0231 27.1729 11.0483 24.3559 11.34C22.4128 7.94062 15.9045 12.1165 13.8653 11.8251C13.8685 12.5334 14.035 13.2315 14.3519 13.865C13.6429 15.2111 13.9164 17.8948 14.1156 19.2522C14.0006 19.2501 12.5721 19.265 13.1779 21.3891C13.771 23.4654 14.2457 23.9402 15.0763 24.2367C15.4319 26.2544 16.031 28.0342 16.8197 28.911V31.3442C16.8197 32.2712 14.7074 33.8323 13.4678 34.2697C10.9063 35.1715 4.61273 37.7652 5.01876 42.6238C5.11608 43.7896 11.5273 44.9997 20.8529 44.9997C30.1784 44.9997 36.5897 43.7899 36.687 42.6238C37.0918 37.7606 30.7818 35.2216 28.2374 34.2706Z"
          fill="#CBCBCB"
        />
      </g>
    </svg>
  );
}

ProfileIcon.defaultProps = {
  width: "42",
  height: "42",
};

ProfileIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
