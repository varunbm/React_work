import React, { Component } from "react";
import RefExample from "./refExample";

class ParentRefExample extends Component {
  constructor(props) {
    super(props);
    this.componetRefs = React.createRef();
  }

  handler = () => {
    this.componetRefs.current.focusInput();
  };

  render() {
    return (
      <div>
        <RefExample ref={this.componetRefs} />
        <button onClick={this.handler}>Focus the input</button>
      </div>
    );
  }
}

export default ParentRefExample;
