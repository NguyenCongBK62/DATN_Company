import React from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";

import backspace from "assets/Icons/cross-backspace.svg";
import "./style/index.less";

export default function NumberPad({
  value,
  onChange,
  dropdownMatchSelectWidth,
  menuItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, "CLEAR", 0],
  customClass = "custom-menu",
  stringMode = false,
}) {
  const handleClick = (i) => {
    if (stringMode) {
      if (i === "CLEAR") {
        onChange("");
      } else {
        onChange(value + i);
      }
    } else {
      if (i !== "CLEAR") {
        const number = parseInt(i);
        onChange(value * 10 + number);
      } else {
        onChange("");
      }
    }
  };
  const handleBackSpace = () => {
    if (stringMode) {
      if (value?.length > 0) {
        onChange(value.toString().slice(0, -1));
      }
    } else {
      if (value) {
        if (value.toString().length > 1) {
          onChange(parseInt(value.toString().slice(0, -1)));
        } else {
          onChange(null);
        }
      } else {
        onChange(null);
      }
    }
  };
  return (
    <Menu
      className={customClass}
      style={{ left: dropdownMatchSelectWidth + 25 }}
    >
      {menuItems.map((item) => {
        return (
          <Menu.Item onClick={() => handleClick(item)} key={item}>
            {item}
          </Menu.Item>
        );
      })}
      <Menu.Item onClick={handleBackSpace}>
        <img src={backspace} />
      </Menu.Item>
    </Menu>
  );
}

NumberPad.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  menuItems: PropTypes.array,
  customClass: PropTypes.string,
  dropdownMatchSelectWidth: PropTypes.number,
  stringMode: PropTypes.bool,
};
