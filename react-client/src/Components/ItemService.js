import React, { Component } from "react";

class ItemService extends Component {
  getServices = () => {
    const response = fetch("https://localhost:44313/api/services", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset-UTF-8"
      }
    });
    return response;
  };

  saveService = data => {
    const response = fetch("https://localhost:44313/api/services", {
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

export default ItemService;
