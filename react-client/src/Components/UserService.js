import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class UserService extends Component {
  checkUser = data => {
    const response = fetch("https://localhost:44313/api/users/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset-UTF-8"
      }
    });

    if (response == true) {
      return <Redirect to="/welcome" />;
    } else {
      alert("Username and Password is incorrect");
    }

    response
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.body;
      })
      .catch(error => {
        console.eror(error);
      });
  };

  render() {
    return;
  }
}

export default UserService;
