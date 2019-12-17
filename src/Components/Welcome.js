import React, { Component } from "react";
import NavBar from "./NavBar.js";

class Welcome extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />;
        <div>
          <h2 className="text-center">Welcome, Username</h2>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Welcome;
