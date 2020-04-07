import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import useForm from "react-hook-form";
import "./LoginPage.css";
import { useHistory } from "react-router-dom";
import UserService from "./UserService";
import Welcome from "./Welcome";

const initailState = {
  username: "",
  password: "",
  usernameError: "",
  passwordError: "",
  loggedIn: false
};

class LoginPage extends Component {
  state = initailState;

  constructor(props) {
    super(props);
    this.UserService = new UserService();
  }

  handleChangeUsername = e => {
    this.setState({ username: e.target.value });
  };

  handleChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  //Function for validating the form
  validate = () => {
    let usernameError = "";
    let passwordError = "";

    //Username errors
    if (this.state.username === "") {
      usernameError = "Username cannot be empty";
    } else if (this.state.username.length <= 3) {
      usernameError = "Username should be more than 3 characters";
    }

    //Password errors
    if (this.state.password === "") {
      passwordError = "Password cannot be empty";
    } else if (this.state.password.length <= 4) {
      passwordError = "Password should be more than 4 characters";
    }

    if (usernameError || passwordError) {
      this.setState({ usernameError, passwordError });
      return false;
    }
    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //Clear form
      this.setState(initailState);

      //Getting data for saving the username and password in Database
      //Data getting from inputs
      const data = {
        Username: this.state.username,
        Password: this.state.password,
        Displayname: this.state.username
      };

      let handleResponse = this.UserService.checkUser(data);
      handleResponse
        .then(res => res.json())
        .then(res => {
          if (res.length > 0) {
            this.props.history.push("/welcome");
          } else {
            alert("incorrect username or password");
          }
        });
    }
  };

  render() {
    return (
      <main className="bg-image">
        {/* Form */}
        <div className="container pt-5">
          <div className="container-login">
            <h1 className="text-center font-weight-light pt-3 text-secondary">
              Login
            </h1>
            <hr className="bg-primary mt-4" />
            <form className="mt-4 pt-3" onSubmit={this.handleSubmit}>
              <div className="form-group ">
                <label className="text-secondary" for="username">
                  Username:
                </label>
                <br />
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  onChange={this.handleChangeUsername}
                  value={this.state.username}
                ></input>
                {/* usernameError div */}
                <div style={{ color: "red" }}>{this.state.usernameError}</div>
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
                  onChange={this.handleChangePassword}
                  value={this.state.password}
                ></input>
                {/* passwordError div */}
                <div style={{ color: "red" }}>{this.state.passwordError}</div>
              </div>
              <div className="row">
                <div className="col text-center pt-4">
                  <Link to="/">
                    <a href="#">Create an account</a>
                  </Link>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary mt-4 pl-4 pr-4 button-login"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default LoginPage;
