import React, { Component } from "react";

class UserService extends Component {
  constructor(props) {
    super(props);
  }

  checkUser = data => {
    const response = fetch("https://localhost:44313/api/users/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset-UTF-8"
      }
    });
    return response;
  };

  render() {
    return;
  }
}

export default UserService;
