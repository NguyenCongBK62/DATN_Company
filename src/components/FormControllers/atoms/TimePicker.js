import React from "react";
import PropTypes from "prop-types";
import { Select } from "antd";
import { Controller } from "react-hook-form";

const hourOptions = [];
const minutesOptions = ["00", "15", "30", "45"].map((v) => ({
  key: v,
  label: v,
}));
for (let j = 0; j < 24; j++) {
  j < 10
    ? hourOptions.push({ key: `0${j}`, label: `0${j}` })
    : hourOptions.push({ key: `${j}`, label: `${j}` });
}

function TimePicker({
  control,
  inputName,
  callback = () => {},
  validation = {},
  errors,
}) {
  const { Option } = Select;

  return (
    <Controller
      control={control}
      name={inputName}
      defaultValue={"00:00"}
      rules={validation}
      render={({ onChange, value }) => {
        const handleChange = (v, type) => {
          const time = value.split(":");
          if (type === "hour") {
            time[0] = v;
          }
          if (type === "minute") {
            time[1] = v;
          }
          onChange(`${time[0]}:${time[1]}`);
          callback();
        };
        return (
          <>
            <Select
              defaultValue={value ? value.split(":")[0] : "00"}
              value={value ? value.split(":")[0] : "00"}
              onChange={(v) => {
                handleChange(v, "hour");
              }}
              className="time-picker"
            >
              {hourOptions.map((option) => (
                <Option key={`time-$${option.key}`} value={option.key}>
                  {option.label}
                </Option>
              ))}
            </Select>
            <span style={{ padding: "0 13.5px" }}>:</span>
            <Select
              defaultValue={value ? value.split(":")[1] : "00"}
              value={value ? value.split(":")[1] : "00"}
              onChange={(v) => {
                handleChange(v, "minute");
              }}
              className="time-picker"
            >
              {minutesOptions.map((option) => (
                <Option key={`endTime_${option.key}`} value={option.key}>
                  {option.label}
                </Option>
              ))}
            </Select>

            <div className="invalid-feedback">{errors && errors.message}</div>
          </>
        );
      }}
    />
  );
}

TimePicker.propTypes = {
  control: PropTypes.any,
  callback: PropTypes.func,
  validation: PropTypes.object,
  inputName: PropTypes.string,
  errors: PropTypes.string,
};

export default TimePicker;
