import React, { Component } from "react";

class Background extends Component {
  styles = {
    color: "red",
    backgroundColor: "blue"
  };

  render() {
    return (
      <React.Fragment>
        <div style={this.styles}>hello</div>
        <div style={this.styles.backgroundColor}>dhsfjhfdjhfjshdjh</div>
      </React.Fragment>
    );
  }
}

export default Background;
