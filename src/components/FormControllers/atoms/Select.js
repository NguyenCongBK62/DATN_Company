import React from 'react';
import { Select as AntSelect } from 'antd';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

export default function Select({
  control,
  inputName,
  defaultValue,
  Options,
  validation,
  placeholder,
  errors = {},
  inputProps = { style: { width: 212 } },
  callback = () => {},
}) {
  const { Option } = AntSelect;
  return (
    <>
      <Controller
        control={control}
        name={inputName}
        rules={validation}
        defaultValue={defaultValue}
        render={({ field: { onChange, value, name } }) => (
          <>
            <AntSelect
              {...inputProps}
              onChange={(v) => {
                onChange(v);
                callback();
              }}
              value={value}
              name={name}
              virtual={false}
              getPopupContainer={(trigger) => trigger.parentNode}
              defaultValue={defaultValue}
              placeholder={placeholder}
            >
              {Options.map((option) => (
                <Option
                  key={`${name}_${option.key}`}
                  value={option.key}
                  disabled={option.disabled}
                >
                  {option.label}
                </Option>
              ))}
            </AntSelect>
            <small className="invalid-feedback">
              {errors && errors.message}
            </small>
          </>
        )}
      />
    </>
  );
}

Select.propTypes = {
  control: PropTypes.any,
  inputName: PropTypes.string,
  placeholder: PropTypes.string,
  inputProps: PropTypes.object,
  errors: PropTypes.object,
  Options: PropTypes.array,
  validation: PropTypes.any,
  callback: PropTypes.func,
  defaultValue: PropTypes.any,
};
