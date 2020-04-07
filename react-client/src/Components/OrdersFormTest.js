import React, { Component } from "react";
import OrderService from "./OrderService";
import ClientService from "./ClientService";

const defaultList = {
  id: "",
  itemSelect: "",
  quantitySelect: "",
  cost: ""
};

class OrdersFormTest extends Component {
  constructor(props) {
    super(props);
    this.List = defaultList;
    this.state = {
      clients: []
    };
    this.ClientService = new ClientService();
  }

  componentDidMount() {
    this.ClientService.getAllClients()
      .then(res => res.json())
      .then(data => {
        this.setState({ clients: data });
      })
      .catch(console.log);
  }

  handleChange = e => {
    this.setState({ cost: e.target.value });
  };

  addRow = () => {
    console.log(this.List);
  };

  render() {
    const { clients } = this.state;
    return (
      <main>
        <div className="container">
          {/* Name and Date */}
          <div className="form-row mt-3">
            <div className="form-group col-md-6">
              Name
              <select className="form-control">
                {/* Mapping the clients to the select option */}
                {clients.map((client, idx) => (
                  <option key={idx}>{client.Name}</option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-6">
              Date
              <input type="datetime-local" className="form-control"></input>
            </div>
          </div>
          <h2 className="font-weight-light">Services</h2>
          <div className="order-select">
            <button
              type="button"
              className="btn btn-primary add-btn mb-4"
              onClick={this.addRow}
            >
              Add
            </button>
            <div className="form-row">
              <div className="form-group col-md-4">
                <select
                  className="form-control itemSelect"
                  value={this.List.itemSelect}
                >
                  <option>Facial</option>
                  <option>Hairstyle</option>
                  <option>Makeup</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <select className="form-control  quantitySelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="form-group col-md-2 text-center">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.List.cost}
                ></input>
              </div>
              <div className="form-group col-md-2">
                <button type="button" className="btn btn-primary">
                  Remove
                </button>
              </div>
            </div>
            <div className="total">
              <span className="text-primary">Total: </span>400
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default OrdersFormTest;
