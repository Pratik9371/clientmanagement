import React, { Component } from "react";
import useForm from "react-hook-form";
import { Link } from "react-router-dom";
import "./ClientForm.css";
import NavBar from "./NavBar";

function ClientForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="container-fluid">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="box">
            <div className="form-row">
              {/* Name */}
              <div className="form-group col-md-6">
                <label for="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your name"
                  ref={register({ required: true, minLength: 3 })}
                ></input>
                {/* Errors(name) */}
                {errors.name && errors.name.type === "required" && (
                  <p className="text-danger">This field is required</p>
                )}
                {errors.name && errors.name.type === "minLength" && (
                  <p className="text-danger">
                    Please enter name more than 2 characters
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="form-group col-md-6">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  ref={register({ required: true })}
                ></input>
                {/* Errors(email) */}
                {errors.email && errors.email.type === "required" && (
                  <p className="text-danger">This field is required</p>
                )}
                {errors.email && errors.email.type === "email" && (
                  <p className="text-danger">
                    Please enter name more than 2 characters
                  </p>
                )}
              </div>
            </div>

            <div className="form-row">
              {/* Phone */}
              <div className="form-group col-md-6">
                <label for="phone">Phone</label>
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  placeholder="Enter your phone number"
                  ref={register({ required: true, minLength: 10 })}
                ></input>
                {/* Errors(Phone) */}
                {errors.phone && errors.phone.type === "required" && (
                  <p className="text-danger">This field is required</p>
                )}
                {errors.phone && errors.phone.type === "minLength" && (
                  <p className="text-danger">Invalid phone number</p>
                )}
              </div>
            </div>
          </div>
          <div className="box">
            <div className="form-row">
              {/* Address */}
              <div className="form-group col-md-6">
                <label for="address">Address</label>
                <input
                  type="address"
                  className="form-control"
                  name="address"
                  placeholder="Enter your address"
                  ref={register({ required: true, minLength: 6 })}
                ></input>
                {/*errors(address)*/}
                {errors.address && errors.address.type === "required" && (
                  <p className="text-danger">This field is required</p>
                )}
              </div>
            </div>
            <div className="form-row">
              {/* Pin-Code */}
              <div className="form-group col-md-6">
                <label for="pin">Pin-Code</label>
                <input
                  type="pin"
                  className="form-control"
                  name="pin"
                  placeholder="Enter your pin-code"
                  ref={register({ required: true, minLength: 6 })}
                ></input>
                {/* Errors(pin) */}
                {errors.pin && errors.pin.type === "required" && (
                  <p className="text-danger">This field is required</p>
                )}
                {errors.pin && errors.pin.type === "minLength" && (
                  <p className="text-danger">Invalid Pin code</p>
                )}
              </div>
            </div>
          </div>

          {/* Buttons at the bottom */}
          <button
            type="reset"
            className="btn btn-primary ml-3 mt-3 float-right"
            ref={register}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary mt-3 float-right"
            ref={register}
          >
            Save
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default ClientForm;
