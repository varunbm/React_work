import React, { Component } from "react";

class HoverCounter extends Component {
  render() {
    const { count, clickHandler } = this.props;
    return (
      <div>
        <h1 onMouseOver={clickHandler}>Hovered {count} times</h1>
      </div>
    );
  }
}

export default HoverCounter;
