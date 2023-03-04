import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setAge } from "../store/slice/signUpInfoSlice";

import ColContainer from "../components/common/ColContainer";
import Header from "../components/common/Header";
import Card from "../components/common/Card";

const ages = [
  { image: null, text: "Under 18" },
  { image: null, text: "18 - 24" },
  { image: null, text: "25 - 34" },
  { image: null, text: "35 - 44" },
  { image: null, text: "45 - 54" },
  { image: null, text: "55 - 64" },
  { image: null, text: "65 or older" },
];

const AgeScreen = () => {
  const dispatch = useDispatch();

  const handleClick = (age) => {
    dispatch(setAge(age));
  };

  return (
    <ColContainer classes="bg-gray-light justify-start">
      <Header />
      <h1 className="text-2xl font-bold px-5 my-7">How old are you?</h1>
      {ages.map((age) => (
        <Link to="/sign_up" key={age.text}>
          <Card
            image={age.image}
            text={age.text}
            classes="w-[95%] h-12"
            onClick={() => handleClick(age.text)}
          />
        </Link>
      ))}
    </ColContainer>
  );
};

export default AgeScreen;
