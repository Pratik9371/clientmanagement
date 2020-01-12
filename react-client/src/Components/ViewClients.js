import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar.js";

class ViewCLient extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container mt-5">
          <h1 className="text-secondary font-weight-light pb-3">
            Clients Table
          </h1>
          <table className="table table-bordered table-form">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Pin Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John</td>
                <td>John@gmail.com</td>
                <td>1234567890</td>
                <td>new york</td>
                <td>401240</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Roman</td>
                <td>Roman@gmail.com</td>
                <td>2561358210</td>
                <td>San fancisco</td>
                <td>401340</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Rock</td>
                <td>Rock@gmail.com</td>
                <td>1234534890</td>
                <td>chicago</td>
                <td>401440</td>
              </tr>
            </tbody>
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
