import React, { Component } from "react";
import NavBar from "./NavBar.js";

class Welcome extends Component {
  render() {
    return (
      <main className="bg-welcome">
        <NavBar />
        <div>
          <h1 className="text-center font-weight-light mt-5">
            Welcome,{" "}
            <span className="text-secondary">
              <i>Username</i>
            </span>
          </h1>
        </div>
      </main>
    );
  }
}

export default Welcome;
