import React, { Component } from "react";

class UserService extends Component {
  state = {};

  saveUser = data => {
    const response = fetch("https://localhost:44313/api/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset-UTF-8"
      }
    });
  };

  render() {
    return;
  }
}

export default UserService;
