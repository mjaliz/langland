import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ColContainer from "../components/common/ColContainer";
import BackButton from "../components/common/BackButton";
import Button from "../components/common/Button";

const SignUpScreen = () => {
  const { signupInfo } = useSelector((state) => state);
  console.log(signupInfo);
  return (
    <ColContainer classes="bg-gray-light justify-center relative">
      <BackButton classes="absolute top-5 left-5" />
      <h1 className="text-center text-4xl font-bold mb-16">
        Sign up and start learning for free
      </h1>
      <Link to="first_name" className="text-center">
        <Button classes="text-white font-semibold bg-primary w-[90%] h-12 rounded-md shadow-lg mx-auto">
          Sign up with email
        </Button>
      </Link>
      <Button classes="font-semibold bg-white w-[90%] h-12 mx-auto rounded-md shadow-md ring-2 ring-gray mt-4">
        More sign up options
      </Button>
      <p className="mt-8 text-md font-semibold mx-auto">
        Already a LangLand user?{" "}
        <Link to="signin" className="text-black font-bold underline">
          Log in
        </Link>
      </p>
    </ColContainer>
  );
};

export default SignUpScreen;
