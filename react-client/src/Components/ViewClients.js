import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import NavBar from "./NavBar.js";

class ViewCLient extends Component {
  state = {
    clients: []
  };

  componentDidMount() {
    fetch("https://localhost:44313/api/clients")
      .then(res => res.json()) //res is response
      .then(data => {
        this.setState({ clients: data });
      })
      .catch(console.log);
  }

  //Edit client
  editClient = () => {
    window.confirm("are you sure?");
  };

  //Delete client
  deleteClient = () => {};

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
            {clients.map(client => (
              <tbody>
                <tr>
                  <td>{client.Cust_id}</td>
                  <td>{client.Name}</td>
                  <td>{client.Email}</td>
                  <td>{client.Phone}</td>
                  <td>{client.Address}</td>
                  <td>{client.Pincode}</td>
                  <Link to={"clients?id=" + client.Cust_id}>
                    <button
                      type="button"
                      className="btn btn-primary m-2"
                      onClick={this.editClient}
                    >
                      Edit
                    </button>
                  </Link>{" "}
                  <button type="button" className="btn btn-danger m-2">
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
