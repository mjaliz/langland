import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { setFirstName } from "../store/slice/signupInfoSlice";

import ColContainer from "../components/common/ColContainer";
import BackButton from "../components/common/BackButton";
import TextInput from "../components/TextInput";
import Button from "../components/common/Button";

import xMark from "../icons/x-mark.svg";
import UserIcon from "../icons/UserIcon";

const FirstNameScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
  });

  const handleSubmit = (values) => {
    dispatch(setFirstName(values.firstName));
    navigate("/sign_up/email");
    console.log("form submitted", values);
  };
  return (
    <ColContainer classes="bg-gray-light justify-start relative items-center">
      <BackButton classes="absolute top-5 left-5" />
      <div className="mt-36 flex flex-col items-center w-[80%]">
        <h1 className="text-center text-4xl font-bold mb-16">
          What's your first name?
        </h1>
        <Formik
          initialValues={{
            firstName: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="w-full text-center">
              <TextInput
                label="Name"
                name="firstName"
                type="text"
                icon={<UserIcon />}
                button={
                  <Button
                    onClick={() =>
                      formik.resetForm({ values: { firstName: "" } })
                    }
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

export default FirstNameScreen;
