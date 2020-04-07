import React, { Component } from "react";

class OrderService extends Component {
  saveOrders = () => {
    const response = fetch("https://localhost:44313/api/orders", {
      method: "POST",
      body: JSON.stringify(),
      headers: {
        "Content-type": "application/json; charset-UTF-8"
      }
    });
  };

  getClientName = () => {
    fetch("https://localhost:44313/api/clients", {
      method: "GET",
      headers: {
        "Content-type": "applicatio/json; charset-UTF-8"
      }
    });
  };

  render() {
    return;
  }
}

export default OrderService;
