import React from 'react';
import { STROKE } from 'constant';
import PropTypes from 'prop-types';

export default function EditIcon({
  width,
  height,
  customStyles,
  stroke = STROKE,
  minX = 0,
  minY = 0,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`${minX} ${minY} ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={customStyles}
    >
      <path
        d="M10.5 1.5L13.5 4.5L5.25 12.75H2.25V9.75L10.5 1.5Z"
        stroke={stroke}
        strokeWidth="0.75"
      />
      <path d="M2.25 16.5H15.75" stroke={stroke} strokeWidth="0.75" />
    </svg>
  );
}

EditIcon.defaultProps = {
  width: '18',
  height: '18',
  customStyles: {},
};

EditIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
  customStyles: PropTypes.object,
  minX: PropTypes.number,
  minY: PropTypes.number,
};
