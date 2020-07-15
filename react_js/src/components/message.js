import React, { Component } from "react";

class Message extends Component {
  state = {
    message: "Welcome Visitor",
  };
  clickHandler = () => {
    this.setState({ message: "Thank you for subscribing." });
  };

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>Subscribe</button>
      </>
    );
  }
}

export default Message;
