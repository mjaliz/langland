import React from "react";

const Button = ({ text, classes }) => {
  // return <button className="bg-primary">{text}</button>;
  return <button className={`${classes}`}>{text}</button>;
};

export default Button;
