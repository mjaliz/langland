import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setTimeGoal } from "../store/slice/signupInfoSlice";

import ColContainer from "../components/common/ColContainer";
import Header from "../components/common/Header";
import Card from "../components/common/Card";

import fifteenMin from "../icons/15-minutes.png";
import thirtyMin from "../icons/30-minutes.png";
import fortyFiveMin from "../icons/45-minutes.png";

const timeGoals = [
  { image: fifteenMin, text: "5 min / day" },
  { image: fifteenMin, text: "15 min / day" },
  { image: thirtyMin, text: "30 min / day" },
  { image: fortyFiveMin, text: "60 min / day" },
  { image: fortyFiveMin, text: "I'm not sure" },
];

const TimeGoalScreen = () => {
  const dispatch = useDispatch();
  const { targetLanguage } = useSelector((state) => state.signupInfo);

  const handleClick = (timeGoal) => {
    dispatch(setTimeGoal(timeGoal));
  };

  return (
    <ColContainer classes="bg-gray-light justify-start">
      <Header />
      <h1 className="text-2xl font-bold px-5 mt-7">
        How much time to do you want to commit to learning {targetLanguage}?
      </h1>
      <p className="text-gray font-bold px-5 my-5">
        Relaxed pace or challenging? Choose a goal that feels right for you.
      </p>
      {timeGoals.map((timeGoal) => (
        <Link to="/age" key={timeGoal.text}>
          <Card
            image={timeGoal.image}
            imgSize="w-11 h-11"
            text={timeGoal.text}
            classes="w-[95%]"
            onClick={() => handleClick(timeGoal.text)}
          />
        </Link>
      ))}
    </ColContainer>
  );
};

export default TimeGoalScreen;
