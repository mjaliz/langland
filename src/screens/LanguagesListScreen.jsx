import React from "react";
import Card from "../components/common/Card";

import ColContainer from "../components/common/ColContainer";

import usFlag from "../icons/flags/us.svg";
import deFlag from "../icons/flags/de.svg";
import irFlag from "../icons/flags/ir.svg";

const LanguagesListScreen = () => {
  return (
    <ColContainer classes="bg-gray-light p-5 justify-start">
      <h1 className="mb-2 text-lg font-semibold">I SPEAK</h1>
      <Card image={irFlag} text="Persian" />
      <h1 className="mb-2 mt-6 text-lg font-semibold">I WANT TO LEARN</h1>
      <Card image={deFlag} text="German" />
      <Card image={usFlag} text="American English" />
    </ColContainer>
  );
};

export default LanguagesListScreen;
