import React from "react";
import s from "./ProfileInfo.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  aboutMe: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  fullName: Yup.string().required("Required"),
  contacts: Yup.object({
    facebook: Yup.string().url("Invalid URL"),
    website: Yup.string().url("Invalid URL"),
    vk: Yup.string().url("Invalid URL"),
    twitter: Yup.string().url("Invalid URL"),
    instagram: Yup.string().url("Invalid URL"),
    youtube: Yup.string().url("Invalid URL"),
    github: Yup.string().url("Invalid URL"),
    mainLink: Yup.string().url("Invalid URL"),
  }),
});

const ProfileDataForm = ({ onSubmit, initialValues, profile }) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <button type={"submit"} id={"submit"} name={"submit"}>
            Save
          </button>
        </div>
        <div>
          <div>
            <b>About me:</b>
          </div>
          <Field
            placeholder={"About Me"}
            type={"textarea"}
            id={"aboutMe"}
            name={"aboutMe"}
          />
          <div>
            <ErrorMessage name="aboutMe" />
          </div>
        </div>
        <div>
          <b>Looking for a job:</b>
          <Field type={"checkbox"} name={"lookingForAJob"} />
        </div>
        <div>
          <div>
            <b>Looking for a job description:</b>
          </div>
          <Field
            placeholder={"Description"}
            type={"textarea"}
            id={"lookingForAJobDescription"}
            name={"lookingForAJobDescription"}
          />
          <div>
            <ErrorMessage name="lookingForAJobDescription" />
          </div>
        </div>
        <div>
          <div>
            <b>Full name:</b>
          </div>
          <Field
            placeholder={"Full name"}
            type={"textarea"}
            id={"fullName"}
            name={"fullName"}
          />
          <div>
            <ErrorMessage name="fullName" />
          </div>
        </div>
        <div>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div key={key} className={s.contact}>
                <b>
                  {key}:{" "}
                  <Field
                    type={"input"}
                    name={"contacts." + key}
                    placeholder={key}
                  />
                </b>
                <div>
                  <ErrorMessage name={`contacts.${key}`} />
                </div>
              </div>
            );
          })}
        </div>
      </Form>
    </Formik>
  );
};

export default ProfileDataForm;
