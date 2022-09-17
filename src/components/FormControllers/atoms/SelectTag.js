import React from 'react';
import { Select as AntSelect } from 'antd';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import 'components/FormControllers/style/index.less';

export default function SelectTag({
  control,
  inputName,
  defaultValue,
  Options,
  validation,
  placeholder,
  errors = {},
  width = '212',
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
              mode="tags"
              value={value}
              name={name}
              virtual={false}
              getPopupContainer={(trigger) => trigger.parentNode}
              defaultValue={defaultValue}
              placeholder={placeholder}
              allowClear="true"
              style={{
                maxWidth: width,
                minWidth: width,
              }}
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

SelectTag.propTypes = {
  control: PropTypes.any,
  inputName: PropTypes.string,
  placeholder: PropTypes.string,
  inputProps: PropTypes.object,
  errors: PropTypes.object,
  Options: PropTypes.array,
  validation: PropTypes.any,
  callback: PropTypes.func,
  defaultValue: PropTypes.any,
  width: PropTypes.any,
};
