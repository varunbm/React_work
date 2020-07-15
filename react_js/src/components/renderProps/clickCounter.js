import React, { Component } from "react";

class ClickCounter extends Component {
  render() {
    const { count, clickHandler } = this.props;
    return (
      <div>
        <button onClick={clickHandler}>Clicked {count} times</button>
      </div>
    );
  }
}

export default ClickCounter;
