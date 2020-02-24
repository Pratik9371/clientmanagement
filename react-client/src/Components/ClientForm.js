import React, { Component } from "react";
import useForm from "react-hook-form";
import { Link } from "react-router-dom";
import "./ClientForm.css";
import NavBar from "./NavBar";
import ClientService from "./ClientService";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  pincode: "",
  nameError: "",
  emailError: "",
  phoneError: "",
  addressError: "",
  pincodeError: ""
};

class ClientForm extends Component {
  state = initialState;

  constructor(props) {
    super(props);
    this.ClientService = new ClientService();
  }

  handleChnage = (e, fieldName) => {
    this.setState({ [fieldName]: e.target.value });
  };

  //Function for validating the fields
  validate = () => {
    let nameError = "";
    let emailError = "";
    let phoneError = "";
    let addressError = "";
    let pincodeError = "";

    //if fields are empty
    if (!this.state.name) {
      nameError = "name cannot be empty";
    }

    if (!this.state.email) {
      emailError = "email cannot be empty";
    }

    if (!this.state.phone) {
      phoneError = "phone cannot be empty";
    }

    if (!this.state.address) {
      addressError = "address cannot be empty";
    }

    if (!this.state.pincode) {
      pincodeError = "pincode cannot be empty";
    }

    //here we are setting errors to the state
    if (emailError || nameError || phoneError || addressError || pincodeError) {
      this.setState({
        emailError,
        nameError,
        phoneError,
        addressError,
        pincodeError
      });
      return false; //we returned false so it wasn't valid
    }
    return true; //true because we don't have any errors
  };

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //Clear form
      this.setState(initialState);

      //Data getting from inputs
      const data = {
        Name: this.state.name,
        Email: this.state.email,
        Phone: this.state.phone,
        Address: this.state.address,
        Pincode: this.state.pincode
      };

      //Save button(will be saved to the DB)
      this.ClientService.SaveClient(data);
    }
  };

  render() {
    return (
      <main>
        <NavBar />
        <div className="container-fluid">
          <form onSubmit={this.handleSubmit}>
            <div className="box">
              <div className="row">
                <div className="col-md-6">
                  Name:
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    onChange={e => this.handleChnage(e, "name")}
                    value={this.state.name}
                  ></input>
                  {/* Name Errors */}
                  <div style={{ color: "red" }}>{this.state.nameError}</div>
                </div>
                <div className="col-md-6">
                  Email:
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    name="email"
                    onChange={e => this.handleChnage(e, "email")}
                    value={this.state.email}
                  ></input>
                  {/* Email Errors */}
                  <div style={{ color: "red" }}>{this.state.emailError}</div>
                </div>
                <div className="col-md-6 p-3">
                  Phone:
                  <input
                    type="phone"
                    className="form-control"
                    placeholder="Enter your phone"
                    name="phone"
                    onChange={e => this.handleChnage(e, "phone")}
                    value={this.state.phone}
                  ></input>
                  {/* Phone Errors */}
                  <div style={{ color: "red" }}>{this.state.phoneError}</div>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="form-row">
                <div className="form-group col-md-6">
                  Address:
                  <input
                    type="address"
                    className="form-control"
                    placeholder="Enter your address"
                    name="address"
                    onChange={e => this.handleChnage(e, "address")}
                    value={this.state.address}
                  ></input>
                  {/* Address Errors */}
                  <div style={{ color: "red" }}>{this.state.addressError}</div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  Pincode:
                  <input
                    type="pin"
                    className="form-control"
                    placeholder="Enter your pincode"
                    name="pin"
                    onChange={e => this.handleChnage(e, "pincode")}
                    value={this.state.pincode}
                  ></input>
                  {/* Pin Errors */}
                  <div style={{ color: "red" }}>{this.state.pincodeError}</div>
                </div>
              </div>
            </div>
            <button
              type="reset"
              className="btn btn-primary ml-3 mt-3 float-right"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary mt-3 float-right">
              Save
            </button>
          </form>
        </div>
      </main>
    );
  }
}

export default ClientForm;
