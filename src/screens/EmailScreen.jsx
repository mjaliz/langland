import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { setEmail } from "../store/slice/signUpInfoSlice";

import ColContainer from "../components/common/ColContainer";
import BackButton from "../components/common/BackButton";
import TextInput from "../components/TextInput";
import Button from "../components/common/Button";
import Spinner from "../components/Spinner";

import xMark from "../icons/x-mark.svg";
import Mail from "../icons/heroicons/Mail";

import config from "../config.json";

const EmailScreen = () => {
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
        "Please insert a valid email address"
      )
      .required("Required"),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post(`${config.apiUrl}/users/check_email`, {
        email: values.email,
      });
      if (res.data.status) {
        dispatch(setEmail(values.email));
        navigate("/sign_up/password");
      }
    } catch (error) {
      setEmailError(error.response.data.message);
    }
    setLoading(false);
  };
  return (
    <ColContainer classes="bg-gray-light justify-start relative items-center">
      <BackButton classes="absolute top-5 left-5" />
      <div className="mt-36 flex flex-col items-center w-[80%]">
        <h1 className="text-center text-4xl font-bold mb-16">
          What's your email?
        </h1>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={validationSchema}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="w-full text-center">
              <TextInput
                onChange={(e) => {
                  formik.handleChange(e);
                  setEmailError(null);
                }}
                label="Email address"
                name="email"
                type="text"
                icon={<Mail />}
                button={
                  <Button
                    onClick={() => formik.resetForm({ values: { email: "" } })}
                  >
                    <img src={xMark} alt="x-mark" width={20} />
                  </Button>
                }
              />
              {emailError && (
                <p className="text-error text-left mt-1">{emailError}</p>
              )}

              <div className="flex justify-center mt-11">
                {loading ? (
                  <Spinner />
                ) : (
                  <Button
                    disabled={!formik.isValid}
                    type="submit"
                    classes={`${
                      formik.isValid
                        ? "text-white bg-primary shadow-md"
                        : "text-gray bg-disabled"
                    } w-full h-14 rounded-md font-semibold`}
                  >
                    Continue
                  </Button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </ColContainer>
  );
};

export default EmailScreen;
