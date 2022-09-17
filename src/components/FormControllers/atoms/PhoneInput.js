import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { AutoComplete } from "antd";
import { useClickOutside } from "hooks";
import NumberPad from "components/NumberPad";
import _ from "lodash";
import { useSelector } from "react-redux";

function PhoneInput({
  control,
  inputName = "phone",
  suggestions,
  validation = {},
  hasAutoComplete = true,
  handleAutoCompleteSelection,
  dropdownMatchSelectWidth = 200,
  placeholder = "09012345678",
  menuItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, "CLEAR", 0],
  parentCallback = () => {},
  characterSplit = "/",
  errors,
}) {
  const [show, setShow] = useState(false);
  const isIphone = useSelector((state) => state.layoutReducer.isIphone);
  const callback = () => {
    setTimeout(() => {
      setShow(false);
    }, 300);
  };

  const elRef = useRef();
  const debounced = _.debounce((v) => parentCallback(v), 150, {
    maxWait: 1000,
  });
  const tempRef = useRef();
  useClickOutside({ elRef, callback });
  return (
    <>
      <Controller
        control={control}
        name={inputName}
        rules={validation}
        defaultValue={""}
        render={({ onChange, value, name }) => {
          const handleSelection = (v, o) => {
            onChange(v.split(characterSplit)[0]);
            handleAutoCompleteSelection(o.key);
          };
          const handleChange = (v) => {
            onChange(v);
            if (hasAutoComplete) {
              debounced(v);
            }
          };
          return (
            <div ref={elRef}>
              {show ? (
                <NumberPad
                  value={value}
                  onChange={handleChange}
                  customClass="ant-dropdown custom-phone-menu"
                  stringMode
                  menuItems={menuItems}
                  dropdownMatchSelectWidth={dropdownMatchSelectWidth}
                />
              ) : null}
              {hasAutoComplete ? (
                <AutoComplete
                  options={suggestions}
                  name={name}
                  style={{
                    width: 212,
                  }}
                  onSelect={(k, o) => handleSelection(k, o)}
                  value={value}
                  open={show}
                  onChange={(v) => {
                    if (isIphone) tempRef?.current.blur();
                    if (v.split("/").length === 2) {
                      handleChange(v);
                    } else {
                      const pattern = /^\d+$/;
                      if (v === "" || pattern.test(v)) {
                        handleChange(v);
                      }
                    }
                  }}
                  onFocus={() => {
                    if (isIphone) tempRef?.current.blur();
                    setShow(true);
                  }}
                  placeholder={placeholder}
                  dropdownMatchSelectWidth={dropdownMatchSelectWidth}
                  className={"number-of-people-input"}
                  ref={tempRef}
                />
              ) : null}
            </div>
          );
        }}
      />
      <small className="invalid-feedback">{errors && errors.message}</small>
    </>
  );
}

PhoneInput.propTypes = {
  control: PropTypes.any,
  defaultValue: PropTypes.any,
  hasAutoComplete: PropTypes.bool,
  validation: PropTypes.any,
  inputName: PropTypes.string,
  characterSplit: PropTypes.string,
  placeholder: PropTypes.string,
  dropdownMatchSelectWidth: PropTypes.number,
  parentCallback: PropTypes.func,
  suggestions: PropTypes.array.isRequired,
  handleAutoCompleteSelection: PropTypes.func.isRequired,
  errors: PropTypes.object,
  menuItems: PropTypes.array,
};

export default PhoneInput;
