import React from "react";
import { Menu } from "antd";
import "./style/index.less";
import PropTypes from "prop-types";
import backspace from "assets/Icons/cross-backspace.svg";

export function NumberPad({
  setTotalNumber,
  clearNumber,
  backspaceNumber,
  customClass = "custom-menu",
  menuItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, "CLEAR", 0],
}) {
  return (
    <Menu className={customClass}>
      {menuItems.map((item) => {
        return (
          <Menu.Item
            onClick={() => {
              item !== "CLEAR" ? setTotalNumber(item) : clearNumber();
            }}
            key={item}
          >
            {item}
          </Menu.Item>
        );
      })}
      <Menu.Item onClick={() => backspaceNumber()}>
        <img src={backspace} />
      </Menu.Item>
    </Menu>
  );
}

NumberPad.propTypes = {
  setTotalNumber: PropTypes.func,
  clearNumber: PropTypes.func,
  backspaceNumber: PropTypes.func,
  customClass: PropTypes.string,
  menuItems: PropTypes.array,
};
