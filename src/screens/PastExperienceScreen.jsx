import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ColContainer from "../components/common/ColContainer";
import Header from "../components/common/Header";
import Card from "../components/common/Card";

const pastExperiences = [
  { image: "no much", text: "Not much" },
  { image: "some", text: "Some" },
  { image: "a lot", text: "A lot" },
];

const PastExperienceScreen = () => {
  const dispatch = useDispatch();
  const { targetLanguage } = useSelector((state) => state.signupInfo);

  const handleClick = (pastExperience) => {
    console.log(pastExperience);
  };
  return (
    <ColContainer classes="bg-gray-light justify-start">
      <Header />
      <h1 className="text-2xl font-bold px-5 mt-7">
        Do you already know any {targetLanguage}?
      </h1>
      <p className="text-gray font-bold px-5 my-5">
        We'll help you find the right place to start.
      </p>
      {pastExperiences.map((pastExperience) => (
        <Link to="/past_experience" key={pastExperience.text}>
          <Card
            image={pastExperience.image}
            text={pastExperience.text}
            classes="w-[95%]"
            onClick={() => handleClick(pastExperience.text)}
          />
        </Link>
      ))}
    </ColContainer>
  );
};

export default PastExperienceScreen;
