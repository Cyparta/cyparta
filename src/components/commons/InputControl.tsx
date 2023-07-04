import React from "react";

interface InputData {
  type?: string;
  placeholder?: string;
  name?: string;
  onChange?: any;
  value?:string;
  className?: string;
}

const InputControl = ({ type, placeholder, name, onChange, value, className}: InputData) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      style={{
        width: "100%",
        padding: "8px",
        border: "1px solid #E1E6EF",
        borderRadius: "10px",
        height: "40px",
      }}
      className={`main-button ${className ? className : ""}`}
    />
  );
};

export default InputControl;
