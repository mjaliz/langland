import React from "react";
import { useLocation } from "react-router-dom";

import BackButton from "./BackButton";

function extractHeader(pathname) {
  const string = pathname.split("/")[1].split("_").join(" ");
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header
      className={`bg-white min-h-[4rem] shadow-md flex items-center px-4`}
    >
      <BackButton />
      <h1 className="ml-7 text-lg font-bold">{extractHeader(pathname)}</h1>
    </header>
  );
};

export default Header;
