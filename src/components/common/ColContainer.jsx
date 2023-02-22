import React from "react";

const ColContainer = ({ classes, children }) => {
  return (
    <div
      className={`flex flex-col mx-auto h-screen sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] ${classes}`}
    >
      {children}
    </div>
  );
};

export default ColContainer;
