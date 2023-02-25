import React from "react";

import ColContainer from "../components/common/ColContainer";
import BackButton from "../components/common/BackButton";

const FirstNameScreen = () => {
  return (
    <ColContainer classes="bg-gray-light justify-center relative">
      <BackButton classes="absolute top-5 left-5" />
      <h1 className="text-center text-4xl font-bold mb-16">
        What's your first name?
      </h1>
    </ColContainer>
  );
};

export default FirstNameScreen;
