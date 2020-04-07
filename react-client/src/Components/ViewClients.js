import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import NavBar from "./NavBar.js";
import ClientService from "./ClientService.js";

class ViewCLient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };
    this.ClientService = new ClientService();
  }

  componentDidMount() {
    this.getClients();
  }

  deleteClient = id => {
    window.confirm("Are you sure?"); // use Window confirm() Method here
    const response = this.ClientService.deleteClient(id);
    response
      .then(res => res.text())
      .then(res => {
        //  if (res == true) {
        this.getClients();
        //}
      });
  };

  getClients() {
    this.ClientService.getAllClients()
      .then(res => res.json()) //res is response
      .then(data => {
        this.setState({ clients: data });
      })
      .catch(console.log);
  }

  render() {
    const { clients } = this.state;
    return (
      <React.Fragment>
        <NavBar />
        <div className="container mt-5">
          <h1 className="text-secondary font-weight-light pb-3">
            Clients Table
          </h1>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Cust Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Pin Code</th>
                <th>Options</th>
              </tr>
            </thead>
            {clients.map((client, i) => (
              <tbody key={i}>
                <tr>
                  <td>{client.Cust_id}</td>
                  <td>{client.Name}</td>
                  <td>{client.Email}</td>
                  <td>{client.Phone}</td>
                  <td>{client.Address}</td>
                  <td>{client.Pincode}</td>
                  <Link to={"client/" + client.Cust_id}>
                    <button type="button" className="btn btn-primary m-2">
                      Edit
                    </button>
                  </Link>{" "}
                  <button
                    type="button"
                    className="btn btn-danger m-2"
                    onClick={() => this.deleteClient(client.Cust_id)}
                  >
                    Delete
                  </button>
                </tr>
              </tbody>
            ))}
          </table>
          <div>
            <Link to="/form">
              <i className="fa fa-plus-circle fa-4x float-right mt-5"></i>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewCLient;
