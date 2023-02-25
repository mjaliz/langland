import React from "react";

const Button = ({ type, disabled, text, classes }) => {
  // return <button className="bg-primary">{text}</button>;
  return (
    <button className={`${classes}`} type={type} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
