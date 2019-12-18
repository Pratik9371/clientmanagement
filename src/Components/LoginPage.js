import React, { Component } from "react";
import { Link } from "react-router-dom";
import useForm from "react-hook-form";
import NavBar from "./NavBar.js";
import "./LoginPage.css";
import { useHistory } from "react-router-dom";

function LoginPage() {
  let history = useHistory();
  // React-hook-form,handleSubmit is the function,errors object
  //is for showing errors.
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data); //username and password is logged into the console
    //uses the useHistory
    history.push("/welcome"); //Redirect to welcome page
  };

  return (
    <div>
      {/* Form */}
      <div className="container">
        <div className="container-login">
          <h1 className="text-center font-weight-light pt-3 text-secondary">
            Login
          </h1>
          <hr className="bg-primary mt-4" />
          <form className="mt-4 pt-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group ">
              <label className="text-secondary" for="username">
                Username:
              </label>
              <br />
              <input
                type="text"
                name="username"
                className="form-control"
                id="uname"
                ref={register({ required: true, minLength: 3 })} //Register the input data and also the requirement of the input field
              ></input>

              {/* Errors(Username) */}
              {errors.username && errors.username.type === "required" && (
                <p className="text-danger">This field is required</p>
              )}
              {errors.username && errors.username.type === "minLength" && (
                <p className="text-danger">
                  Username should be more than 2 characters
                </p>
              )}
            </div>
            <div className="form-group">
              <label className="text-secondary" for="password">
                Password:
              </label>
              <br />
              <input
                type="password"
                name="password"
                className="form-control"
                id="pass"
                ref={register({ required: true, minLength: 8 })}
              ></input>

              {/* Errors(Password) */}
              {errors.password && errors.password.type === "required" && (
                <p className="text-danger">This field is required</p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p className="text-danger">
                  Password should be atleast of 8 characters
                </p>
              )}
            </div>
            <div className="row">
              <div className="col text-center pt-4">
                <Link to="/form">
                  <a href="#">Create an account</a>
                </Link>
                <br />
                <button
                  type="submit"
                  className="btn btn-primary mt-4 pl-4 pr-4 button-login"
                  ref={register}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
