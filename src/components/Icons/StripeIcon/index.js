import React from "react";
import PropTypes from "prop-types";

export default function StripeIcon({
  bounds = { width: 92, height: 17 },
  stroke,
  inputProps,
}) {
  const lines = [];
  for (let i = -5; i < (parseInt(bounds.width) + 50) / 9; i++) {
    lines.push(
      <line
        key={`line-${i}`}
        y1="-0.5"
        x2="69.5261"
        y2="-0.5"
        transform={`matrix(-0.661622 0.749838 -0.661622 -0.749838 ${
          (i + 1) * 9
        } -10.0667)`}
        stroke={stroke}
      />
    );
  }
  return (
    <svg
      {...inputProps}
      width={bounds.width}
      height={bounds.height}
      viewBox={`0 0 ${bounds.width} ${bounds.height}`}
    >
      <g>{lines}</g>
    </svg>
  );
}

StripeIcon.propTypes = {
  bounds: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  stroke: PropTypes.string,

  inputProps: PropTypes.object,
};
