import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import ColContainer from "../components/common/ColContainer";
import BackButton from "../components/common/BackButton";
import TextInput from "../components/TextInput";
import Button from "../components/common/Button";

import xMark from "../icons/x-mark.svg";
import Mail from "../icons/heroicons/Mail";
import { checkEmail } from "../store/slice/signupInfoSlice";

const EmailScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signupInfo } = useSelector((state) => state);
  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
        "Please insert a valid email address"
      )
      .required("Required")
      .test(
        "Email must be unique",
        "User already registered",
        function (value) {
          return new Promise((resolve, reject) => {
            axios
              .post(`http://localhost:5000/users/check_email`, {
                email: value,
              })
              .then((res) => {
                resolve(true);
              })
              .catch((error) => {
                if (error.response.data.message) {
                  resolve(false);
                }
              });
          });
        }
      ),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    navigate("/sign_up/password");
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
          validateOnChange={false}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="w-full text-center">
              <TextInput
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
              <Button
                disabled={!formik.isValid}
                type="submit"
                classes={`${
                  formik.isValid
                    ? "text-white bg-primary shadow-md"
                    : "text-gray bg-disabled"
                } mt-12 w-full h-14 rounded-md font-semibold`}
              >
                Continue
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </ColContainer>
  );
};

export default EmailScreen;
