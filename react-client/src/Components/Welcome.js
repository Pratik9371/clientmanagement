import React, { Component } from "react";
import NavBar from "./NavBar.js";
import UserService from "./UserService";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: ""
    };
  }

  //Getting data to display the username of the user logged in
  componentDidMount() {
    fetch("https://localhost:44313/api/users/")
      .then(res => res.json())
      .then(result => {
        this.setState({ displayName: result[0].UserName });
      });
  }

  render() {
    return (
      <main className="bg-welcome">
        <NavBar />
        <div>
          <h1 className="text-center font-weight-light mt-5">
            Welcome, {this.state.displayName}
          </h1>
        </div>
      </main>
    );
  }
}

export default Welcome;
