import React, { Component } from "react";
import NavBar from "./NavBar.js";

class Orders extends Component {
  state = {};
  render() {
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
              <form>
                <div className="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group">
                  <label for="description">Description</label>
                  <input
                    type="text"
                    name="desscription"
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group">
                  <label for="price">Price</label>
                  <input
                    type="price"
                    name="price"
                    className="form-control"
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
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>xyz</td>
                    <td>Rs.1000</td>
                  </tr>
                  <tr>
                    <td>Rock</td>
                    <td>abc</td>
                    <td>Rs.1000</td>
                  </tr>
                  <tr>
                    <td>Roman</td>
                    <td>pqr</td>
                    <td>Rs.1000</td>
                  </tr>
                  <tr>
                    <td>seth</td>
                    <td>abc</td>
                    <td>Rs.1000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Orders;
