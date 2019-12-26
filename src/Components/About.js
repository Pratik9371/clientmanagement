import React, { Component } from "react";
import NavBar from "./NavBar.js";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <h1 className="text-secondary font-weight-light text-center mt-5">
          About
        </h1>
      </div>
    );
  }
}

export default About;
