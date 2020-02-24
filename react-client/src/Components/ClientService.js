import React, { Component } from "react";

class ClientService extends Component {
  state = {};

  clientData = {};

  SaveClient = data => {
    const response = fetch("https://localhost:44313/api/clients", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset-UTF-8"
      }
    });
  };

  editClient = () => {
    const response = fetch("https://localhost:44313/api/clients", {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        "Content-type": "application/json; charset-UTF-8"
      }
    });
  };

  render() {
    return;
  }
}

export default ClientService;
