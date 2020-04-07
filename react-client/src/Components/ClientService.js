import React, { Component } from "react";

class ClientService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  SaveClient = data => {
    const response = fetch("https://localhost:44313/api/clients", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset-UTF-8"
      }
    });
  };

  updateClient = (data, id) => {
    const response = fetch(`https://localhost:44313/api/clients?id=${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset-UTF-8"
      }
    });
  };

  getAllClients = () => {
    const response = fetch(`https://localhost:44313/api/clients`, {
      method: "Get",
      headers: {
        "Content-type": "application/json; charset-UTF-8"
      }
    });
    return response;
  };

  deleteClient = id => {
    const response = fetch(`https://localhost:44313/api/clients?id=${id}`, {
      method: "DELETE",
      body: JSON.stringify(),
      headers: {
        "Content-type": "application/json; charset-UTF-8"
      }
    });
    return response;
  };

  render() {
    return null;
  }
}

export default ClientService;
