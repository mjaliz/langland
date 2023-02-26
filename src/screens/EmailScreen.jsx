import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import ColContainer from "../components/common/ColContainer";
import BackButton from "../components/common/BackButton";
import TextInput from "../components/TextInput";
import Button from "../components/common/Button";

import xMark from "../icons/x-mark.svg";
import UserIcon from "../icons/UserIcon";

const EmailScreen = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
  });
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
        >
          {(formik) => (
            <Form className="w-full text-center">
              <TextInput
                label="Email address"
                name="email"
                type="text"
                icon={<UserIcon />}
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
