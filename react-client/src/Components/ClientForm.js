import React, { Component, componentDidMount } from "react";
import useForm from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import "./ClientForm.css";
import NavBar from "./NavBar";
import ClientService from "./ClientService";
import { querystring } from "query-string";

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
  pincodeError: "",
};

class ClientForm extends Component {
  state = initialState;

  constructor(props) {
    super(props);
    this.ClientService = new ClientService();
    this.user = this.props.match.params;
  }

  handleChnage = (e, fieldName) => {
    this.setState({ [fieldName]: e.target.value });
  };

  // const user = this.props.match.params;
  /**
   *  read id of the user
   *  get user data for this id throgh api
   *  read the data recieved fom the api server
   *  set teh data into the form fields
   *
   * after this user will get the form filled with the details saved in db, instead of blank form
   */

  componentDidMount() {
    //if the id is undefined then /form will open with empty fields and if it is provided it will fetch the api.
    if (this.user.id === undefined) {
      this.state = initialState;
    } else {
      fetch(`https://localhost:44313/api/clients/${this.user.id}`)
        .then((res) => res.json())
        //Setting values gettings from db to the fields
        .then((result) => {
          this.setState({
            name: result[0].Name,
            email: result[0].Email,
            phone: result[0].Phone,
            address: result[0].Address,
            pincode: result[0].Pincode,
          });
        });
    }
  }

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
        pincodeError,
      });
      return false; //we returned false so it wasn't valid
    }
    return true; //true because we don't have any errors
  };

  handleSubmit = (e) => {
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
        Pincode: this.state.pincode,
      };

      //Save button(will be saved to the DB)
      // this.ClientService.SaveClient(data);

      //if user.id is undefined then set save button to saveClient api else updateClient api
      const id = this.user.id;
      if (id === undefined) {
        this.ClientService.SaveClient(data);
      } else {
        this.ClientService.updateClient(data, id);
      }
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
                    onChange={(e) => this.handleChnage(e, "name")}
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
                    onChange={(e) => this.handleChnage(e, "email")}
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
                    onChange={(e) => this.handleChnage(e, "phone")}
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
                    onChange={(e) => this.handleChnage(e, "address")}
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
                    onChange={(e) => this.handleChnage(e, "pincode")}
                    value={this.state.pincode}
                  ></input>
                  {/* Pin Errors */}
                  <div style={{ color: "red" }}>{this.state.pincodeError}</div>
                </div>
              </div>
            </div>
            <Link to="/viewclients">
              <button
                type="reset"
                className="btn btn-primary ml-3 mt-3 float-right"
              >
                Cancel
              </button>
            </Link>
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
