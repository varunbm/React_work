import React, { Component } from "react";
import updatedComponent from "./hocComponent";

class MouseHover extends Component {
  render() {
    const { count, handleCounter } = this.props;
    return (
      <div>
        <h2 onMouseOver={handleCounter}>Count is {count}</h2>
      </div>
    );
  }
}

export default updatedComponent(MouseHover, 10);
