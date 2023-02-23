import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setMotivation } from "../store/slice/signupInfoSlice";
import Card from "../components/common/Card";

import ColContainer from "../components/common/ColContainer";
import Header from "../components/common/Header";

import travel from "../icons/travel.png";
import work from "../icons/work.png";
import school from "../icons/school.png";
import family from "../icons/family.png";
import personal from "../icons/personal.png";
import skill from "../icons/skill.png";
import other from "../icons/other.png";
import { Link } from "react-router-dom";

const motivations = [
  { image: travel, text: "Travel" },
  { image: work, text: "Work" },
  { image: school, text: "School" },
  { image: family, text: "Family / Friends" },
  { image: personal, text: "Personal interest" },
  { image: skill, text: "Skill improvement" },
  { image: other, text: "Other" },
];

const MotivationScreen = () => {
  const dispatch = useDispatch();
  const { targetLanguage } = useSelector((state) => state.signupInfo);
  const handleClick = (motivation) => {
    console.log(motivation);
    dispatch(setMotivation(motivation));
  };
  return (
    <ColContainer classes="bg-gray-light justify-start">
      <Header />
      <h1 className="text-2xl font-bold px-5 mt-7">
        What is the main reason you want to learn {targetLanguage}?
      </h1>
      <p className="text-gray font-bold px-5 my-3">
        Learners with clear motivations are more likely to stay on track.
      </p>
      {motivations.map((motivation) => (
        <Link to="/past_experience" key={motivation.text}>
          <Card
            image={motivation.image}
            text={motivation.text}
            classes="w-[95%]"
            onClick={() => handleClick(motivation.text)}
          />
        </Link>
      ))}
    </ColContainer>
  );
};

export default MotivationScreen;
