import React from "react";
import PropTypes from "prop-types";
import DatePicker from "components/FormControllers/atoms/DatePicker";
import Input from "components/FormControllers/atoms/Input";
import NumberInput from "components/FormControllers/atoms/NumberInput";
import List from "components/FormControllers/atoms/List";
import TextArea from "components/FormControllers/atoms/TextArea";
import Select from "components/FormControllers/atoms/Select";
import Label from "components/Form/atoms/Label";

import dayjs from "dayjs";

function CustomField({ customField, control, errors }) {
  let rows = 3;
  let validation = {};
  let formControl = null;
  let selOptions = [];
  switch (customField.type.id) {
    case 1:
      if (customField.required) {
        validation = {
          required: `「${customField.name}」を入力してください。`,
          maxLength: {
            value: 500,
            message: `「${customField.name}」500文字以内で入力してください。`,
          },
        };
      }
      formControl = (
        <Input
          control={control}
          inputName={`custom-${customField.name}`}
          // errors={errors[`custom-${customField.name}`]}
          validation={validation}
        />
      );
      break;
    case 2:
      if (customField.required) {
        validation = {
          required: `「${customField.name}」を入力してください。`,
          maxLength: {
            value: 500,
            message: `「${customField.name}」500文字以内で入力してください。`,
          },
        };
      }

      formControl = (
        <NumberInput
          control={control}
          defaultValue={null}
          inputName={`custom-${customField.name}`}
          // errors={errors[`custom-${customField.name}`]}
          validation={validation}
          inputNumberProps={{
            min: 0,
            max: 999,
            placeholder: "999",
            type: "number",
          }}
          label={customField.unit}
        />
      );
      break;
    case 3:
      selOptions = customField.option.map((m) => ({
        key: m.id,
        label: m.name,
      }));
      selOptions.unshift({ key: -1, label: "--" });
      if (customField.required) {
        validation = {
          required: `「${customField.name}」を選択してください。`,
        };
      }
      formControl = (
        <Select
          control={control}
          Options={selOptions}
          inputName={`custom-${customField.name}`}
          // errors={errors[`custom-${customField.name}`]}
          validation={validation}
        />
      );
      break;
    case 4:
      if (customField.required) {
        validation = {
          validate: (value) => {
            return (
              value.length !== 0 ||
              `「${customField.name}」を選択してください。`
            );
          },
        };
      }
      formControl = (
        <List
          control={control}
          inputName={`custom-${customField.name}`}
          options={customField.option}
          // errors={errors[`custom-${customField.name}`]}
          validation={validation}
          hasAllSelect={false}
          label={(item) => {
            formControl = item.name;
          }}
        />
      );
      break;
    case 5:
      if (customField.required) {
        validation = {
          validate: (value) => {
            return !!value || `「${customField.name}」を選択してください。`;
          },
        };
      }
      formControl = (
        <DatePicker
          control={control}
          inputName={`custom-${customField.name}`}
          // errors={errors[`custom-${customField.name}`]}
          defaultValue={null}
          validation={validation}
          inputProps={{
            placeholder: "2019/07/25（木）",
            initialDate: dayjs().format("YYYY-MM-DD"),
          }}
        />
      );
      break;
    case 6:
      if (customField.required) {
        validation = {
          required: `「${customField.name}」を入力してください。`,
        };
      }
      rows = 3;
      customField.attribute.forEach((a) => {
        if (a.name === "row") {
          rows = a.value;
        }
      });
      formControl = (
        <TextArea
          control={control}
          // errors={errors[`custom-${customField.name}`]}
          inputName={`custom-${customField.name}`}
          validation={validation}
          inputProps={{ rows }}
        />
      );
  }

  return (
    <div className="input-group">
      <Label label={customField.name} required={customField.required} />
      <div className="input-element">{formControl}</div>
    </div>
  );
}

CustomField.propTypes = {
  customField: PropTypes.any.isRequired,
  control: PropTypes.any,
  errors: PropTypes.any,
};

export default CustomField;
