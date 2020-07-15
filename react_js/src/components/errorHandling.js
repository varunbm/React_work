import React, { Component } from "react";

class ErrorHandling extends Component {
  state = {
    isError: false,
  };

  static getDerivedStateFromError(error) {
    return {
      isError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(info);
  }

  render() {
    if (this.state.isError) {
      return <h1>Something went wrong</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorHandling;
