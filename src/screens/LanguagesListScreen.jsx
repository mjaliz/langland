import React from "react";
import Card from "../components/common/Card";

import ColContainer from "../components/common/ColContainer";
import Header from "../components/common/Header";

import usFlag from "../icons/flags/us.svg";
import deFlag from "../icons/flags/de.svg";
import irFlag from "../icons/flags/ir.svg";
import { Link } from "react-router-dom";

const LanguagesListScreen = () => {
  return (
    <ColContainer classes="bg-gray-light justify-start">
      <Header />
      <h1 className="mb-2 mt-6 mx-5 text-lg text-gray font-semibold">
        I SPEAK
      </h1>
      <Card image={irFlag} text="Persian" classes="w-full rounded-none" />
      <h1 className="mb-2 mt-6 mx-5 text-gray text-lg font-semibold">
        I WANT TO LEARN
      </h1>
      <Link to="/american_english">
        <Card image={usFlag} text="American English" classes="w-[95%]" />
      </Link>
      <Card image={deFlag} text="German" classes="w-[95%]" />
    </ColContainer>
  );
};

export default LanguagesListScreen;
