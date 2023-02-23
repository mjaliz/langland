import React from "react";
import { Link } from "react-router-dom";

import ColContainer from "../components/common/ColContainer";
import Button from "../components/common/Button";
import landing from "../images/landing.png";

const ChooseLanguageScreen = () => {
  return (
    <ColContainer classes="justify-between">
      <img src={landing} alt="people are speaking" className="w-full" />
      <div className="mb-auto">
        <h3 className="text-center text-lg font-bold">Speak with confidence</h3>
        <p className="text-gray text-center mt-7 w-[80%] mx-auto">
          Get talking from lesson one, with conversation-based learning
        </p>
      </div>
      <div className="flex flex-col items-center mb-6">
        <Link to="/my_languages" className="w-full text-center">
          <Button
            text="Choose a language"
            classes="text-white font-semibold bg-primary h-12 w-[80%] rounded-md shadow-lg"
          />
        </Link>
        <p className="mt-5 text-sm text-gray">
          Already a LangLand user?{" "}
          <Link to="signin" className="text-black font-bold underline">
            Log in
          </Link>
        </p>
      </div>
    </ColContainer>
  );
};

export default ChooseLanguageScreen;
