import React from "react";
import { Formik, Form } from "formik";

import ColContainer from "../components/common/ColContainer";
import BackButton from "../components/common/BackButton";
import TextInput from "../components/TextInput";
import Button from "../components/common/Button";

const FirstNameScreen = () => {
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
      >
        {(formik) => (
          <Form className="w-[80%] text-center">
            <TextInput label="Name" name="firstName" type="text" />
            <Button
              disabled={!formik.isValid}
              type="submit"
              text="Continue"
              classes={`${
                !formik.isValid
                  ? "text-white bg-primary"
                  : "text-gray-light bg-gray"
              } mt-12 w-full h-14 rounded-md shadow-md`}
            />
          </Form>
        )}
      </Formik>
    </ColContainer>
  );
};

export default FirstNameScreen;
