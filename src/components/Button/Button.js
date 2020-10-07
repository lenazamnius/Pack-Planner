import React from "react";
import "./Button.css";

const Button = ({ label, ...rest }) => {
  return (
    <div className="Button">
      <button {...rest}>{label}</button>
    </div>
  );
};

export default Button;