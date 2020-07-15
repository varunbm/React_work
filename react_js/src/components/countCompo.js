import React, { Component } from "react";
import updatedComponent from "./hocComponent";

class CountCompo extends Component {
  render() {
    const { count, handleCounter, name } = this.props;
    return (
      <div>
        <button onClick={handleCounter}>
          Click {count} {name}
        </button>
      </div>
    );
  }
}

export default updatedComponent(CountCompo, 5);
