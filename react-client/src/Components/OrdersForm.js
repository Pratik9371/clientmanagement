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
      data: [{ clientName: "" }],
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

  handleServiceChange = (id, e) => {
    //Getting all the data of the formdata and storing it into a variable.
    const form = this.state.formdata;
    form[id].service = e.target.value;
    //  form.rowId = id;
    //  this.setState({ formdata: form });

    //form[id].rowId = id;

    //Here we are using javascript find function to get the service which matches the service which is selected.
    const selectedService = this.state.services.find(
      (item) => item.Name == e.target.value
    );

    //Calculation of the price.
    const selectedQuantity = form[id].quantity ? form[id].quantity : 1;
    form[id].quantity = selectedQuantity;

    const totalprice = selectedService.Price * selectedQuantity;
    form[id].price = selectedService.Price;
    //are dada updated price ikde update kon karnar
    form[id].updatedPrice = totalprice;
    this.setState({ formdata: form });
  };

  handleQntyChange = (id, e) => {
    const form = this.state.formdata;
    form[id].quantity = e.target.value;
    this.setState({ formdata: form });

    //updating price based on selected quantity.
    const updatedPrice =
      this.state.formdata[id].price * this.state.formdata[id].quantity;
    form[id].updatedPrice = updatedPrice;
    this.setState({ formdata: form });
  };

  add = () => {
    const form = this.state.formdata;
    form.push({
      service: "",
      quantity: "",
      price: "",
      updatedPrice: "",
    });
    this.setState({ formdata: form });
  };

  remove = (id) => {
    window.confirm("Are you Sure you want to delete id: " + id);
    const form = this.state.formdata;
    form.splice(id, 1);
    this.setState({ formdata: form });
  };

  handleClientChange = (e) => {
    const selectedClient = e.target.value;
    console.log(selectedClient);
  };

  saveOrders = (e) => {
    e.preventDefault();
  };

  render() {
    const { clients, services, formdata } = this.state;
    return (
      <main>
        <NavBar />
        <div className="container">
          <form onSubmit={this.saveOrders}>
            {/* Name and Date */}
            <div className="form-row mt-3">
              <div className="form-group col-md-6">
                Name
                <select
                  className="form-control"
                  onChange={this.handleClientChange}
                >
                  {/* Mapping the clients to the select option */}
                  <option>---Select Client---</option>
                  {clients.map((client, id) => (
                    <option key={id} value={client.Cust_id}>
                      {client.Name}
                    </option>
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
              {JSON.stringify(formdata)}

              {formdata.map((form, id) => {
                return (
                  <div className="row mb-4" key={id}>
                    <div className="col-md-3">
                      <select
                        className="form-control"
                        name="service"
                        value={form.service}
                        onChange={this.handleServiceChange.bind(this, id)}
                      >
                        <option>---Select Service---</option>
                        {services.map((service, id) => (
                          <option key={id} value={service.Name}>
                            {service.Name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <select
                        className="form-control"
                        value={form.quantity}
                        name="quantity"
                        onChange={this.handleQntyChange.bind(this, id)}
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
                        value={form.updatedPrice}
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
          </form>
        </div>
      </main>
    );
  }
}

export default OrdersForm;
