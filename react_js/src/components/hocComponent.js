import React, { Component } from "react";

const UpdatedComponent = (OriginalComponent, counterValue) => {
  class NewComponent extends Component {
    state = {
      count: 0,
    };
    handleCounter = () => {
      this.setState((prevState) => {
        return { count: prevState.count + counterValue };
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          handleCounter={this.handleCounter}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
