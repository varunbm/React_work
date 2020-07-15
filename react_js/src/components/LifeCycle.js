import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = {
      name: "",
    };
  }

  componentDidMount() {
    console.log("CDM");
  }
  render() {
    console.log("Render");
    return <div> LifeCycle</div>;
  }
}

export default LifeCycle;
