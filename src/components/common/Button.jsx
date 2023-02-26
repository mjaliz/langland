import React from "react";

const Button = ({ onClick, type, disabled, classes, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${classes}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
