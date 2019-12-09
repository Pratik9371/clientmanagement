import React, { Component } from "react";
import "./StyleSheet.css";

class LoginPage extends Component {
  state = {
    inputtype: "",
    password: ""
  };

  validate = e => {
    e.preventDefault();
    console.log("Clicked");
  };

  render() {
    return (
      <div>
        <h1>
          Welcome to
          <br /> Hype Enterprise
        </h1>
        <div className="box">
          <h2>Login</h2>
          <form onSubmit={this.validate} className="form">
            <div className="inputfield">
              <label>Username: </label>
              <br />
              <input className="inputtype" type="text"></input>
            </div>
            <div className="passwordfield">
              <label>Password: </label>
              <br />
              <input className="password" type="password"></input>
            </div>
            <div>
              <a href="#">Already have an Account?</a>
            </div>
            <div>
              <button className="button">LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
