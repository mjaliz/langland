import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import _ from "lodash";

import { setPassword } from "../store/slice/signupInfoSlice";

import ColContainer from "../components/common/ColContainer";
import BackButton from "../components/common/BackButton";
import TextInput from "../components/TextInput";
import Button from "../components/common/Button";

import eye from "../icons/eye.svg";
import eyeSlash from "../icons/eye-slash.svg";
import Lock from "../icons/heroicons/Lock";

const PasswordScreen = () => {
  const { signupInfo } = useSelector((state) => state);
  console.log(signupInfo);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    password: Yup.string()
      .matches(/^[a-zA-Z0-9!@#$%^&*]{7,}$/, "Must have at least 7 characters")
      .matches(
        /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,}$/,
        "Must have least one special character"
      )
      .matches(
        /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{1,}$/,
        "Must have at least one number"
      )
      .required("Required"),
  });

  const handleSubmit = (values) => {
    // navigate("/sign_up/password");
    const data = { ...signupInfo, password: values.password };
    const body = _.pick(data, [
      "speakLanguage",
      "targetLanguage",
      "motivation",
      "pastExperience",
      "timeGoal",
      "age",
      "name",
      "email",
      "password",
    ]);
    console.log(body);
    console.log("submitted");
  };
  return (
    <ColContainer classes="bg-gray-light justify-start relative items-center">
      <BackButton classes="absolute top-5 left-5" />
      <div className="mt-36 flex flex-col items-center w-[80%]">
        <h1 className="text-center text-3xl font-bold mb-16">
          Choose a password
        </h1>
        <Formik
          initialValues={{
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="w-full text-center">
              <TextInput
                label="Password"
                name="password"
                autoComplete="off"
                type={showPassword ? "text" : "password"}
                icon={<Lock />}
                button={
                  <Button
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                  >
                    <img
                      src={showPassword ? eyeSlash : eye}
                      alt="x-mark"
                      width={20}
                    />
                  </Button>
                }
              />
              <Button
                type="submit"
                classes={`${
                  formik.isValid
                    ? "text-white bg-primary shadow-md"
                    : "text-gray bg-disabled"
                } mt-12 w-full h-14 rounded-md font-semibold`}
              >
                Sign up now
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </ColContainer>
  );
};

export default PasswordScreen;
