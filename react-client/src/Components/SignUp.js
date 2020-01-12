import React, { Component } from "react";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="contaiiner">
          <form>
            <div className="form-control">
              <label>
                <input type="text" name="Email" className="form-group"></input>{" "}
              </label>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
