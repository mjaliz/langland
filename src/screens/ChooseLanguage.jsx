import React from "react";
import Button from "../components/common/Button";
import landing from "../images/landing.jpg";

const ChooseLanguage = () => {
  return (
    <div className="bg-dark h-screen flex flex-col">
      <img src={landing} alt="pepole are speaking" className="w-full" />
      <h3>Speak with confidence</h3>
      <p>Get talking from lesson one, with conversation-based learning</p>
      <Button text="Choose your language" color="white" bgColor="primary" />
    </div>
  );
};

export default ChooseLanguage;
