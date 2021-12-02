import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";
import "./loginForm.css";
import TextError from "../textError";
import { UserLoggedInContext } from "../../app";
import { useNavigate } from "react-router";

function LoginForm() {
  const navigate = useNavigate();
  const userLoggedinContext = React.useContext(UserLoggedInContext);
  const [isNotUser, setisNotUser] = React.useState(false);
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    let users = [];
    if (localStorage.getItem("ecomUsers")) {
      users = JSON.parse(localStorage.getItem("ecomUsers"));
    }

    let index = users.findIndex(
      (d) => d.email === values.email && d.password === values.password
    );
    console.log(index, users);
    if (index === -1) {
      setisNotUser(true);
      console.log("email id or password is incorrect");
      return;
    }
    userLoggedinContext.dispatch({
      type: "login",
      payload: users[index],
    });

    localStorage.setItem("userLoggedIn", JSON.stringify(users));
    navigate(-1);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <Typography htmlFor="email" variant="h6">
            Email{" "}
          </Typography>
          <Field id="email" name="email" type="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>
        <div className="form-control">
          <Typography htmlFor="password" variant="h6">
            Password{" "}
          </Typography>
          <Field id="password" name="password" type="password" />
          <ErrorMessage name="password" component={TextError} />
        </div>
        {isNotUser ? (
          <Typography variant="body1" color="text.error">
            Email or Password incorrect
          </Typography>
        ) : (
          ""
        )}
        <div className="form-control">
          <ButtonGroup fullWidth>
            <Button variant="contained" type="submit">
              Sign in
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                document.location.href = "/signup";
              }}
            >
              Signup
            </Button>
          </ButtonGroup>
        </div>
      </Form>
    </Formik>
  );
}

export default LoginForm;
