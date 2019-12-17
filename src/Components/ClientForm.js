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
        <h1 className="text-secondary font-weight-light">Client Form</h1>
        <form
          className="mt-4 client-form form-inline"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-group">
            {/* name field */}
            <label for="name">Name:</label>
            <input
              type="text"
              className="form-control input mr-4"
              placeholder="Enter your name"
              id="name"
              name="name"
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
          {/* email field */}
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control input mr-4"
              placeholder="Enter your email"
              id="email"
              name="email"
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
          {/* phone number */}
          <div className="form-group">
            <label for="phone">Phone:</label>
            <input
              type="phone"
              className="form-control input mr-4"
              placeholder="Enter your Phone number"
              id="phone"
              name="phone"
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
          {/* Address */}
          <div className="form-group">
            <label for="address">Address:</label>
            <input
              type="address"
              className="form-control input"
              placeholder="Enter your Address"
              id="address"
              name="address"
              ref={register({ required: true })}
            ></input>
            {/*errors(address)*/}
            {errors.address && errors.address.type === "required" && (
              <p className="text-danger">This field is required</p>
            )}
          </div>
          {/* pin code */}
          <div className="form-group">
            <label for="pin">Pin code:</label>
            <input
              type="pin"
              className="form-control input"
              placeholder="Enter your Pin code"
              id="pin"
              name="pin"
              ref={register({ required: true, minLength: 6 })}
            ></input>
            {/* Errors(pin) */}
            {errors.pin && errors.pin.type === "required" && (
              <p className="text-danger">This field is required</p>
            )}
            {errors.pin && errors.pin.type === "minLength" && (
              <p className="text-danger">Invalid Pin code</p>
            )}

            {/* Buttons at the bottom */}
            <button
              type="reset"
              className="btn btn-primary ml-3 mt-5 float-right"
              ref={register}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary mt-5 float-right"
              ref={register}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default ClientForm;
