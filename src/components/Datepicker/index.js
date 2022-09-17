import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import DatePickerComponent from "components/Datepicker/datepicker-custom";
// import dayjs from "dayjs";
import { ConfigProvider } from "antd/es";
import jaJP from "antd/lib/locale/ja_JP";

export default function DatePicker({
  control,
  inputName,
  validationOptions,
  error,
  defaultValue,
  inputProps = {},
  callback = () => {},
}) {
  return (
    <ConfigProvider locale={jaJP}>
      <Controller
        control={control}
        name={inputName}
        rules={validationOptions?.[inputName]}
        defaultValue={defaultValue}
        render={(
          { onChange, value, name },
          { invalid, isTouched, isDirty }
        ) => (
          <DatePickerComponent
            {...inputProps}
            value={value}
            onChange={(v) => {
              onChange(v);
              callback(v);
            }}
            name={name}
            inputReadOnly
          />
        )}
      />
      <small className="invalid-feedback">{error && error.message} </small>
    </ConfigProvider>
  );
}

DatePicker.propTypes = {
  control: PropTypes.any,
  inputName: PropTypes.string,
  inputProps: PropTypes.object,
  validationOptions: PropTypes.object,
  callback: PropTypes.func,
  error: PropTypes.any,
  defaultValue: PropTypes.any,
};
