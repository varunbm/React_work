import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      couner: 0,
      name: "",
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.couner}`;
  }

  componentDidUpdate(prevProps, pervState) {
    if (pervState.couner !== this.state.couner) {
      document.title = `Clicked ${this.state.couner}`;
      console.log("*** updateing ");
    }
  }

  incrementHandler = () => {
    this.setState({
      couner: this.state.couner + 1,
    });
  };

  changeHanlder = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementHandler}>
          Clicked {this.state.couner}
        </button>
        <input
          type="text"
          value={this.state.name}
          onChange={this.changeHanlder}
        />
      </div>
    );
  }
}

export default ClassCounter;
