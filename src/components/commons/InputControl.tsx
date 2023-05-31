import React from "react";

interface InputData {
  type: string;
  placeholder: string;
}

const InputControl = ({ type, placeholder }: InputData) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        width: "100%",
        padding: "8px",
        border: "1px solid #E1E6EF",
        outline: "none",
        borderRadius: "10px",
        height: "40px",
      }}
      className="main-button"
    />
  );
};

export default InputControl;
