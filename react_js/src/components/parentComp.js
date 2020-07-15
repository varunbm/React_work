import React, { Component } from "react";
import ChildComp from "./childComp";

class ParentComp extends Component {
  state = {
    parentName: "Parent",
  };

  greetParent = () => {
    console.log(`Greeting parent ${this.state.parentName}`);
  };

  render() {
    return (
      <div>
        <ChildComp greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComp;
