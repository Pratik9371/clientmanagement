import React, { Component } from "react";
import ClientService from "./ClientService";
import ItemService from "./ItemService";
import "./OrderForm.css";
import NavBar from "./NavBar";

class OrdersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      services: [],
      formdata: [
        { rowId: "", service: "", quantity: "", price: "", updatedPrice: "" },
      ],
    };
    this.ClientService = new ClientService();
    this.itemService = new ItemService();
  }

  componentDidMount() {
    this.getClients();
    this.getServices();
  }

  //Getting Clients to display in dropdown.
  getClients = () => {
    this.ClientService.getAllClients()
      .then((res) => res.json())
      .then((data) => {
        this.setState({ clients: data });
      });
  };

  //Getting services to display items in dropdown.
  getServices = () => {
    this.itemService
      .getServices()
      .then((res) => res.json())
      .then((result) => {
        this.setState({ services: result });
      });
  };

  handleServiceChange = (e) => {
    //Getting all the data of the formdata and storing it into a variable.
    const form = this.state.formdata;
    form.service = e.target.value;
    this.setState({ formdata: form });

    //Here we are using javascript find function to get the service which matches the service which is selected.
    const selectedService = this.state.services.find(
      (item) => item.Name == e.target.value
    );

    //Calculation of the price.
    const selectedQuantity = this.state.formdata.quantity
      ? this.state.formdata.quantity
      : 1;

    const totalprice = selectedService.Price * selectedQuantity;
    form.price = selectedService.Price;
    //are dada updated price ikde update kon karnar
    form.updatedPrice = totalprice;
    this.setState({ formdata: form });
  };

  handleQntyChange = (e) => {
    const form = this.state.formdata;
    form.quantity = e.target.value;
    this.setState({ formdata: form });

    //updating price based on selected quantity.
    const updatedPrice =
      this.state.formdata.price * this.state.formdata.quantity;
    form.updatedPrice = updatedPrice;
    this.setState({ formdata: form });
  };

  // add = () => {
  //   const addInputs = this.state.inputs;
  //   addInputs.push({ itemSelect: "", quantitySelect: "", updatedPrice: "" });
  //   this.setState({ itemSelect: "", quantitySelect: "", updatedPrice: "" });
  // };

  // remove = (i) => {
  //   console.log(i);
  //   const inputs = this.state.inputs;
  //   inputs.splice(i, 1);
  //   this.setState({ formdata: "" });
  // };

  render() {
    const { clients, services, formdata } = this.state;
    return (
      <main>
        <NavBar />
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
          {/* services container */}
          <h2 className="font-weight-light">Services</h2>
          <div className="order-select">
            <button
              type="button"
              className="btn btn-primary add-btn mb-4"
              onClick={this.add}
            >
              Add
            </button>
            {formdata.map((add, id) => {
              return (
                <div className="row mb-4">
                  <div className="col-md-3">
                    <select
                      className="form-control"
                      name="service"
                      onChange={this.handleServiceChange}
                    >
                      <option>---Select Service---</option>
                      {services.map((service) => (
                        <option value={service.Name}>{service.Name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select
                      className="form-control"
                      value={this.state.quantity}
                      name="quantity"
                      onChange={this.handleQntyChange}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <input
                      type="text"
                      name="price"
                      value={this.state.formdata.updatedPrice}
                      className="form-control"
                    ></input>
                  </div>
                  <div className="col-md-3">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.remove(id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Buttons at the bottom */}
          <div className="mt-5 float-right">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button type="reset" className="btn btn-primary ml-3">
              Cancel
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default OrdersForm;
