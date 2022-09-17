import React from "react";
import PropTypes from "prop-types";
import dayjsGenerateConfig from "rc-picker/lib/generate/dayjs";
import generatePicker from "antd/es/date-picker/generatePicker";
import jaJP from "antd/lib/locale/ja_JP";

import { Controller } from "react-hook-form";
import { ConfigProvider } from "antd/es";
import "antd/es/date-picker/style/index";

const DatePickerComponent = generatePicker(dayjsGenerateConfig);

export default function DatePicker({
  control,
  inputName,
  validation = {},
  format = null,
  errors,
  defaultValue,
  inputProps = {},
  callback = () => {},
}) {
  return (
    <ConfigProvider locale={jaJP}>
      <Controller
        control={control}
        name={inputName}
        rules={validation}
        defaultValue={defaultValue}
        render={({ onChange, value, name }) => {
          return (
            <DatePickerComponent
              {...inputProps}
              value={value}
              onChange={(v) => {
                onChange(v);
                callback();
              }}
              name={name}
              inputReadOnly
            />
          );
        }}
      />
      <small className="invalid-feedback">{errors && errors.message} </small>
    </ConfigProvider>
  );
}

DatePicker.propTypes = {
  control: PropTypes.any,
  inputName: PropTypes.string,
  inputProps: PropTypes.object,
  validation: PropTypes.object,
  callback: PropTypes.func,
  errors: PropTypes.any,
  defaultValue: PropTypes.any,
  format: PropTypes.any,
};
