import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Input } from 'antd';

export default function TextArea({
  control,
  inputName,
  validation = {},
  inputProps = { rows: 6 },
  errors,
  defaultValue = '',
  callback = () => {},
  showCharacterCount = false,
}) {
  const [characterCount, setCharacterCount] = useState(0);
  const handleCharacterCount = (v) => {
    if (v.target.value.length > 0) {
      setCharacterCount(v.target.value.length);
    } else {
      setCharacterCount(0);
    }
  };
  return (
    <>
      <Controller
        control={control}
        rules={validation}
        name={inputName}
        defaultValue={defaultValue}
        render={({ field: { onChange, value, name } }) => (
          <Input.TextArea
            {...inputProps}
            className={'textarea-custom'}
            name={name}
            value={value}
            onChange={(v) => {
              onChange(v);
              callback(v);
              handleCharacterCount(v);
            }}
          />
        )}
      />
      <small className="invalid-feedback">{errors && errors.message}</small>
      {showCharacterCount ? (
        <span style={{ marginLeft: 10 }}>文字数：{characterCount} 文字</span>
      ) : (
        ''
      )}
    </>
  );
}

TextArea.propTypes = {
  control: PropTypes.any,
  errors: PropTypes.any,
  validation: PropTypes.any,
  inputName: PropTypes.string,
  inputProps: PropTypes.object,
  defaultValue: PropTypes.string,
  callback: PropTypes.func,
  showCharacterCount: PropTypes.bool,
};
