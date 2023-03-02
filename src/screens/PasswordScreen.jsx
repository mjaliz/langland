import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import ColContainer from "../components/common/ColContainer";
import BackButton from "../components/common/BackButton";
import TextInput from "../components/TextInput";
import Button from "../components/common/Button";

import xMark from "../icons/x-mark.svg";
import Mail from "../icons/heroicons/Mail";

const PasswordScreen = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    password: Yup.string()
      .matches(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
        "Please insert a valid password address"
      )
      .required("Required"),
  });

  const handleSubmit = () => {
    navigate("/sign_up/password");
  };
  return (
    <ColContainer classes="bg-gray-light justify-start relative items-center">
      <BackButton classes="absolute top-5 left-5" />
      <div className="mt-36 flex flex-col items-center w-[80%]">
        <h1 className="text-center text-4xl font-bold mb-16">
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
                type="text"
                icon={<Mail />}
                button={
                  <Button
                    onClick={() =>
                      formik.resetForm({ values: { password: "" } })
                    }
                  >
                    <img src={xMark} alt="x-mark" width={20} />
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
