import React from "react";
import { Link, useLocation } from "react-router-dom";

import ArrowLeft from "../../icons/ArrowLeft";
function extractHeader(pathname) {
  const string = pathname.split("/")[1].split("_").join(" ");
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Header = () => {
  const { pathname } = useLocation();
  console.log(extractHeader(pathname));
  return (
    <header className={`bg-white h-16 shadow-md flex items-center px-4`}>
      <Link to="/">
        <ArrowLeft />
      </Link>
      <h1 className="ml-7 text-lg font-bold">{extractHeader(pathname)}</h1>
    </header>
  );
};

export default Header;
