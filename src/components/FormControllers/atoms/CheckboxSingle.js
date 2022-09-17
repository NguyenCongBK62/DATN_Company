import React from "react";
import { Checkbox as AntCheckbox } from "antd";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

export default function CheckboxSingle({
  control,
  inputName,
  validation = {},
  label = "",
  errors,
  defaultValue = "",
}) {
  return (
    <>
      <Controller
        control={control}
        name={inputName}
        rules={validation}
        defaultValue={defaultValue}
        render={({ onChange, value, name }) => (
          <AntCheckbox
            checked={value}
            name={name}
            onChange={(e) => onChange(e.target.checked)}
          >
            {label}
          </AntCheckbox>
        )}
      />
      <small className="invalid-feedback">{errors && errors.message}</small>
    </>
  );
}

CheckboxSingle.propTypes = {
  control: PropTypes.any,
  inputName: PropTypes.string,
  validation: PropTypes.object,
  errors: PropTypes.any,
  defaultValue: PropTypes.any,
  label: PropTypes.string,
};
