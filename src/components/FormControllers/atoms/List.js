import React, { useState } from "react";
import { List as AntList, Checkbox } from "antd";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import _ from "lodash";
export default function List({
  control,
  options,
  inputName,
  errors,
  validation = {},
  valueName = "name",
  label = () => {},
  hasAllSelect = true,
  style = {},
}) {
  const [alreadySelected, setAlreadySelected] = useState([]);

  return (
    <Controller
      control={control}
      defaultValue={[]}
      name={inputName}
      rules={validation}
      render={({ onChange, value, name }) => {
        const updatedOptions = hasAllSelect
          ? [{ id: -2, name: "全店舗", disabled: false }, ...options]
          : options;

        const handleItemSelect = (flag, item) => {
          if (flag && item.id === -2) {
            onChange(updatedOptions.filter((o) => !o.disabled));
          } else if (!flag && item.id === -2) {
            onChange([]);
          } else if (
            flag &&
            _.findIndex(value, (o) => o.id === item.id) === -1
          ) {
            if (item.id === -1) {
              onChange([item]);
            } else {
              onChange([...value.filter((o) => o.id !== -1), item]);
            }
          } else if (
            !flag &&
            _.findIndex(value, (o) => o.id === item.id) !== -1
          ) {
            onChange(value.filter((o) => o.id !== item.id && o.id !== -2));
          }
        };

        return (
          <>
            <AntList
              size="small"
              bordered="bordered"
              dataSource={updatedOptions}
              style={style}
              renderItem={(item, index) => {
                _.forEach(value, (v) => {
                  if (
                    _.find(alreadySelected, (s) => v.id === s.id) === undefined
                  ) {
                    setAlreadySelected([...alreadySelected, v]);
                  }
                });
                return (
                  <AntList.Item
                    key={index}
                    style={{
                      color: item.disabled ? "#eee" : "inherit",
                    }}
                  >
                    <div className="list-custom">
                      <div className="list-left">
                        <Checkbox
                          disabled={item.disabled}
                          onClick={(e) => {
                            handleItemSelect(e.target.checked, item);
                          }}
                          checked={
                            _.find(value, (v) => item.id === v.id) !== undefined
                          }
                          name={name}
                        >
                          {item[valueName]}
                        </Checkbox>
                      </div>
                      <div className="multi-checkbox-right">{label(item)}</div>
                    </div>
                  </AntList.Item>
                );
              }}
            />
            <small className="invalid-feedback">
              {errors && errors.message}
            </small>
          </>
        );
      }}
    />
  );
}

List.propTypes = {
  control: PropTypes.any,
  errors: PropTypes.any,
  inputName: PropTypes.string,
  valueName: PropTypes.string,
  itemProps: PropTypes.object,
  options: PropTypes.array,
  label: PropTypes.any,
  validation: PropTypes.any,
  hasAllSelect: PropTypes.any,
  style: PropTypes.any,
};
