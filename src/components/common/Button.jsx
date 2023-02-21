import React from "react";

const Button = ({ text, color, bgColor }) => {
  return <button className={`text-${color} bg-${bgColor}`}>{text}</button>;
};

export default Button;
