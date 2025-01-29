import React from "react";

import "./log.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function App({ handleScrollToSignup }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address")
        .required("Required"),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[A-Z])(?=.*\d).{8,}$/,
          "Must include one uppercase letter, one number, and be at least 8 characters"
        ),
    }),
    onSubmit: (values) => {
      onValidSignIn();
    },
  });
  return (
    <div>
      <section className="showcase">
        <div className="overlay">
          <article>
            <p className="tag">
              <strong>Welcome to your Account </strong>
            </p>
            <form className="form" onSubmit={formik.handleSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
              <button type="submit">log in </button>
              <small>
                By clicking the button, you are agreeing to our{" "}
                <span className="red">Terms and Services</span>
              </small>
            </form>
            <p>
              Don't have an account?{" "}
              <button className="changeButton" onClick={handleScrollToSignup}>
                Click here to sign up!
              </button>
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
