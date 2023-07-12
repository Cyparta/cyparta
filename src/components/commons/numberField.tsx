import React from "react";
import { TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";
import InputControl from "./InputControl";

const NumberField = ({ variant, onChange, placeholder, ...rest }:any) => {
  const handleValueChange = (values:any) => {
    onChange({ target: { ...values } });
  };

  return (
    <NumericFormat
      customInput={InputControl}
      variant={Boolean(variant) ? variant : "standard"}
      onValueChange={handleValueChange}
      placeholder={placeholder}
     
      {...rest}
    />
  );
};

export default NumberField;