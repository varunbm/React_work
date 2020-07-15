import React, { Component } from "react";
import ComponentC from "./componentC";
import UserContext from "./context";

class ComponentB extends Component {
  render() {
    return (
      <div>
        Component C context is {this.context}
        <ComponentC />
      </div>
    );
  }
}

ComponentB.contextType = UserContext;
export default ComponentB;
