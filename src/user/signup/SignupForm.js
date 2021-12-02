import { Field, Form, Formik, ErrorMessage } from "formik";
import { Button, Typography } from "@mui/material";
import * as Yup from "yup";

import React from "react";
import TextError from "../textError";

function SignupForm() {
  const [emailExist, setEmailExist] = React.useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    let users = [];
    if (localStorage.getItem("ecomUsers")) {
      users = JSON.parse(localStorage.getItem("ecomUsers"));
    }
    console.log(users);
    const index = users.findIndex((d) => d.email === values.email);
    if (index !== -1) {
      setEmailExist(true);
      return;
    }
    users.push(values);
    console.log(users);
    localStorage.setItem("ecomUsers", JSON.stringify(users));
    document.location.href = "/login";
    console.log(values);
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    phoneNo: Yup.number().required("Required").positive().integer(),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-control">
            <Typography htmlFor="firstName">First Name </Typography>
            <Field id="firstName" name="firstName" type="text" />
            <ErrorMessage name="firstName" component={TextError} />
          </div>
          <div className="form-control">
            <Typography htmlFor="lastName">Last Name </Typography>
            <Field id="lastName" name="lastName" type="text" />
            <ErrorMessage name="lastName" component={TextError} />
          </div>
          <div className="form-control">
            <Typography htmlFor="phoneNo">Phone No </Typography>
            <Field id="phoneNo" name="phoneNo" type="number" />
            <ErrorMessage name="phoneNo" component={TextError} />
          </div>
          <div className="form-control">
            <Typography htmlFor="email">Email </Typography>
            <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" component={TextError} />
          </div>
          <div className="form-control">
            <Typography htmlFor="password">Password </Typography>
            <Field id="password" name="password" type="password" />
            <ErrorMessage name="password" component={TextError} />
          </div>
          {emailExist ? (
            <Typography variant="body1" align="center">
              Email already Exists
            </Typography>
          ) : (
            <Typography />
          )}
          <div className="form-control">
            <Button variant="contained" type="submit" fullWidth>
              Submit
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default SignupForm;
