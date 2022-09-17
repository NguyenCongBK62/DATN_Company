import React from "react";
import { Dropdown, Input } from "antd";
import { NumberPad } from "./NumberPad";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

export default function NumberPadDropdown({
  control,
  setTotalNumber,
  clearNumber,
  backspaceNumber,
  handleVisibleChange,
  visible,
  displayNumber,
  inputName,
  inputNumberProps,
  dropDownProps,
  setNumber,
  defaultValue,
  numberOfPeopleValidation,
  menuItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, "CLEAR", 0],
}) {
  return (
    <Controller
      control={control}
      name={inputName}
      defaultValue={defaultValue}
      rules={{
        validate: numberOfPeopleValidation,
      }}
      render={({ onChange, value, name }, { invalid, isTouched, isDirty }) => (
        <Dropdown
          overlay={NumberPad({
            setTotalNumber,
            clearNumber,
            backspaceNumber,
            menuItems,
          })}
          {...dropDownProps}
          onVisibleChange={handleVisibleChange}
          visible={visible}
          getPopupContainer={(trigger) => trigger.parentElement}
          value={displayNumber}
        >
          <Input
            {...inputNumberProps}
            name={name}
            value={displayNumber}
            onChange={(e) => {
              // if (isNaN(parseInt(e.target.value))) {
              //   setNumber(0);
              // } else setNumber(parseInt(e.target.value));
              setNumber(e.target.value);
            }}
          />
        </Dropdown>
      )}
    />
  );
}

NumberPadDropdown.propTypes = {
  control: PropTypes.any,
  setTotalNumber: PropTypes.func,
  clearNumber: PropTypes.func,
  backspaceNumber: PropTypes.func,
  handleVisibleChange: PropTypes.func,
  visible: PropTypes.bool,
  displayNumber: PropTypes.any,
  inputName: PropTypes.string,
  inputNumberProps: PropTypes.object,
  dropDownProps: PropTypes.object,
  setNumber: PropTypes.func,
  numberOfPeopleValidation: PropTypes.func,
  defaultValue: PropTypes.any,
  menuItems: PropTypes.array,
};
