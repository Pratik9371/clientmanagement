import React, { Component } from "react";
import { useState } from "react";

const Sample = () => {
  const blankCat = { name: "", age: "" };
  const [catState, setCatState] = useState([{ ...blankCat }]);

  const addCat = () => {
    setCatState([...catState, { ...blankCat }]);
  };

  return (
    <form>
      <label for="owner">Owner</label>
      <input type="text" name="owner" id="owner" />
      <label for="description">Description</label>
      <input type="text" name="description" id="description" />
      <input type="button" value="Add New Cat" onClick={addCat} />
      {catState.map((val, idx) => {
        const catId = `name-${idx}`;
        const ageId = `age-${idx}`;
        return (
          <div key={`cat-${idx}`}>
            <label for={catId}>Cat-{idx + 1}</label>
            <input type="text" name={catId} id={catId}></input>
            <label for={ageId}>Age</label>
            <input type="text" name={ageId} id={ageId}></input>
          </div>
        );
      })}

      <input type="submit" value="Submit" />
    </form>
  );
};
export default Sample;
