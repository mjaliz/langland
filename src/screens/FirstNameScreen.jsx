import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import ColContainer from "../components/common/ColContainer";
import BackButton from "../components/common/BackButton";
import TextInput from "../components/TextInput";
import Button from "../components/common/Button";

const FirstNameScreen = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
  });
  return (
    <ColContainer classes="bg-gray-light justify-center relative items-center">
      <BackButton classes="absolute top-5 left-5" />
      <h1 className="text-center text-4xl font-bold mb-16 w-[80%]">
        What's your first name?
      </h1>
      <Formik
        initialValues={{
          firstName: "",
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form className="w-[80%] text-center">
            <TextInput label="Name" name="firstName" type="text" />
            <Button
              disabled={!formik.isValid}
              type="submit"
              text="Continue"
              classes={`${
                formik.isValid
                  ? "text-white bg-primary shadow-md"
                  : "text-gray bg-disabled"
              } mt-12 w-full h-14 rounded-md font-semibold`}
            />
          </Form>
        )}
      </Formik>
    </ColContainer>
  );
};

export default FirstNameScreen;
