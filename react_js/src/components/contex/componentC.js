import React, { Component } from "react";
import { Consumer } from "./context";

class ComponentC extends Component {
  render() {
    return (
      <Consumer>
        {(username) => {
          return <h2>Hello {username} !!</h2>;
        }}
      </Consumer>
    );
  }
}

export default ComponentC;
