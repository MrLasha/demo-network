import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../Redux/auth-reducer";

const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid format").required("Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const LoginForm = (props) => {
  const onSubmit = (values) => {
    props.login(
      values.email,
      values.password,
      values.rememberMe,
      values.captcha
    );
  };
  const registerMe = () => {
    window.location.assign("https://social-network.samuraijs.com/signUp");
  };
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <Field placeholder={"Email"} id={"email"} name={"email"} />
          <div>
            <ErrorMessage name="email" />
          </div>
        </div>
        <div>
          <Field
            placeholder={"Password"}
            id={"password"}
            name={"password"}
            type={"password"}
            autocomplete={"current-password"}
          />
          <div>
            <ErrorMessage name="password" />
          </div>
        </div>
        <div>
          <Field type={"checkbox"} id={"checkbox"} name={"rememberMe"} />
          remember me
        </div>
        <div>{props.captchaUrl && <img src={props.captchaUrl} />}</div>
        <div>
          {props.captchaUrl && (
            <Field
              placeholder={"symbols from img"}
              type={"input"}
              id={"captcha"}
              name={"captcha"}
            />
          )}
        </div>
        <div>
          <button type={"submit"} id={"submit"} name={"submit"}>
            Login
          </button>
          <button
            type={"signup"}
            id={"signup"}
            name={"signup"}
            onClick={registerMe}
          >
            Signup
          </button>
        </div>
      </Form>
    </Formik>
  );
};

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm login={props.login} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
