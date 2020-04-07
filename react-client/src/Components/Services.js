import React, { Component } from "react";
import NavBar from "./NavBar.js";
import ItemService from "./ItemService";

const initialState = {
  Name: "",
  Description: "",
  Price: ""
};

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      initialState
    };
    this.ItemService = new ItemService();
  }

  componentDidMount() {
    this.getServices();
  }

  getServices = () => {
    this.ItemService.getServices()
      .then(res => res.json())
      .then(result => {
        this.setState({ services: result });
      });
  };

  handleChange = (e, fieldName) => {
    this.setState({ [fieldName]: e.target.value });
  };

  add = e => {
    e.preventDefault();
    this.setState(initialState);

    const data = {
      Name: this.state.Name,
      Description: this.state.Description,
      Price: this.state.Price
    };

    this.ItemService.saveService(data);
    this.getServices();
  };

  render() {
    const { services } = this.state;
    return (
      <main>
        <NavBar />
        <div className="container-fluid">
          <h1 className="font-weight-light m-3">Services</h1>
          <hr />
          <div className="form-row mt-5">
            <div
              className="form-group col-md-5 p-3 ml-5 mr-5"
              style={{ border: "1px solid rgb(214, 204, 204)" }}
            >
              {/* Form */}
              <form onSubmit={this.add}>
                <div className="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={this.state.Name}
                    onChange={e => this.handleChange(e, "Name")}
                  ></input>
                </div>
                <div className="form-group">
                  <label for="description">Description</label>
                  <input
                    type="text"
                    name="desscription"
                    className="form-control"
                    value={this.state.Description}
                    onChange={e => this.handleChange(e, "Description")}
                  ></input>
                </div>
                <div className="form-group">
                  <label for="price">Price</label>
                  <input
                    type="price"
                    name="price"
                    className="form-control"
                    value={this.state.Price}
                    onChange={e => this.handleChange(e, "Price")}
                  ></input>
                </div>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </form>
            </div>

            {/* Table */}
            <div className="from-group col-md-5 ml-5">
              <table className="table table-bordered my-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                </thead>
                {services.map((service, i) => (
                  <tbody key={i}>
                    <tr>
                      <td>{service.Name}</td>
                      <td>{service.Description}</td>
                      <td>{service.Price}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Services;
