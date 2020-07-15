import React, { Component } from "react";
import "./myStyles.css";
const styleing = {
  fontSize: "50px",
  color: "blue",
};

class Condi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //   1) if / else
    // if (this.state.isLoggedIn) {
    //   return <div>Hello Varun</div>;
    // } else {
    //   return <div>Hello Guest</div>;
    // }

    // 2) elemets
    // let message;
    // if (this.state.isLoggedIn) {
    //   this.message = <div>Hello Varun</div>;
    // } else {
    //   this.message = <div>Hello Guest</div>;
    // }
    // return <div>{this.message}</div>;

    // 3) Ternary
    // return this.state.isLoggedIn ? (
    //   <div>Hello Varun</div>
    // ) : (
    //   <div>Hello Guest</div>
    // );

    // 4) Short cirit
    return this.state.isLoggedIn && <div style={styleing}>Hello Varun</div>;
    // return this.state.isLoggedIn && <div className="primary">Hello Varun</div>;
  }
}

export default Condi;
