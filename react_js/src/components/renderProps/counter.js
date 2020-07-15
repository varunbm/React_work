import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  clickHandler = () => {
    this.setState((preState) => {
      return { count: preState.count + 1 };
    });
  };
  render() {
    return <div>{this.props.render(this.state.count, this.clickHandler)}</div>;
  }
}

export default Counter;
