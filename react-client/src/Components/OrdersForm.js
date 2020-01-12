import React, { Component } from "react";
import "./OrderForm.css";
import { useState } from "react";

const OrdersForm = () => {
  const defualtList = {
    id: "",
    itemSelect: "",
    quantitySelect: ""
  };

  const [List, updateList] = useState([{ ...defualtList }]);

  //function for adding the inputs row
  const addRow = () => {
    //setting the new id
    const newId = randomString(4);
    defualtList.id = newId;
    console.log(List);

    updateList([...List, { ...defualtList }]);
  };

  //function for deleting the inputs row
  const deleteRow = rowId => {
    const arr = List.filter(list => list.id != rowId);
    updateList(arr);
    console.log(arr);
  };

  //function for generating random string(used for unique id)
  const randomString = length => {
    let characters = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  return (
    <main>
      <div className="container">
        {/* Name and Date */}
        <div className="form-row mt-3">
          <div className="form-group col-md-6">
            Name
            <input
              type-="text"
              className="form-control"
              name="name"
              placeholder="Enter your name"
            ></input>
          </div>
          <div className="form-group col-md-6">
            Date
            <input type="datetime-local" className="form-control"></input>
          </div>
        </div>
        <h2 className="font-weight-light">Services</h2>
        <div className="order-select">
          <button
            type="button"
            className="btn btn-primary add-btn mb-4"
            onClick={addRow}
          >
            Add
          </button>

          {List.map((val, idx) => {
            const itemSelect = `${idx}`;
            const quantitySelect = `${idx}`;
            return (
              <div key={idx} className="form-row">
                <div className="form-group col-md-4">
                  <select
                    className="form-control itemSelect"
                    name={itemSelect}
                    id={itemSelect}
                  >
                    <option>Facial</option>
                    <option>Hairstyle</option>
                    <option>Makeup</option>
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <select
                    className="form-control  quantitySelect"
                    name={quantitySelect}
                    id={quantitySelect}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div className="form-group col-md-2 text-center">200</div>

                <div className="form-group col-md-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={deleteRow}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div className="total">
            <span className="text-primary">Total: </span>400
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-5 float-right">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button type="reset" className="btn btn-primary ml-3">
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
};

export default OrdersForm;
