import React, { useState } from 'react';
import { Dropdown, Input } from 'antd';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import NumberPad from 'components/NumberPad';

export default function NumberInput({
  control,
  validation = {},
  defaultValue = 0,
  inputName,
  inputNumberProps,
  errors,
  int = false,
  type = 'number',
  label = '',
  className = 'number-input',
  stringMode = false,
  width = '212',
}) {
  return (
    <Controller
      control={control}
      name={inputName}
      defaultValue={defaultValue}
      rules={validation}
      render={({ field: { onChange: originalOnchange, value, name } }) => {
        const onChange = (v) => {
          if (int) {
            originalOnchange(parseInt(v));
          } else {
            originalOnchange(v);
          }
        };
        return (
          <>
            <Input
              {...inputNumberProps}
              name={name}
              value={value}
              onChange={(e) => {
                const inputNumber = e.target.value;
                onChange(inputNumber);
              }}
              className={className}
              type={type}
              style={{
                maxWidth: width,
                minWidth: width,
              }}
            />
            {label ? <span style={{ marginLeft: 5 }}>{label}</span> : null}

            <small className="invalid-feedback">
              {errors && errors.message}
            </small>
          </>
        );
      }}
    />
  );
}

NumberInput.propTypes = {
  control: PropTypes.any,
  validation: PropTypes.object,
  inputNumberProps: PropTypes.object,
  defaultValue: PropTypes.any,
  type: PropTypes.string,
  label: PropTypes.string,
  errors: PropTypes.any,
  inputName: PropTypes.string,
  menuItems: PropTypes.array,
  className: PropTypes.string,
  stringMode: PropTypes.bool,
  int: PropTypes.bool,
};
