import React from "react";
import { Checkbox as AntCheckbox } from "antd";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

export default function Checkbox({
  control,
  inputName,
  validation = {},
  errors,
  options,
  inputProps = {},
  defaultValue = "",
  callback = () => {},
}) {
  return (
    <>
      <Controller
        control={control}
        name={inputName}
        rules={validation}
        defaultValue={defaultValue}
        render={({ onChange, value, name }) => (
          <AntCheckbox.Group
            {...inputProps}
            name={name}
            value={defaultValue}
            onChange={(v) => {
              onChange(v);
              callback(v);
            }}
          >
            {options.map((item) => (
              <AntCheckbox value={item.id} key={`${item.name}_${item.id}`}>
                {item.name}
              </AntCheckbox>
            ))}
          </AntCheckbox.Group>
        )}
      />
      <small className="invalid-feedback">{errors && errors.message}</small>
    </>
  );
}

Checkbox.propTypes = {
  control: PropTypes.any,
  inputName: PropTypes.string,
  inputProps: PropTypes.object,
  validation: PropTypes.object,
  errors: PropTypes.any,
  defaultValue: PropTypes.any,
  callback: PropTypes.func,
  options: PropTypes.array,
  values: PropTypes.array,
};
