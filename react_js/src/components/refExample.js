import React, { Component } from "react";

class RefExample extends Component {
  inputRef = React.createRef();

  //   componentDidMount() {
  //     this.inputRef.current.focus();
  //   }

  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default RefExample;
