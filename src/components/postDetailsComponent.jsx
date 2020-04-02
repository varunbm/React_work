import React, { Component } from "react";

class PostsDetails extends Component {
  backHandler = () => {
    this.props.history.replace("/posts");
  };

  render() {
    return (
      <div>
        <p>Post details - {this.props.match.params.id} </p>
        <button onClick={this.backHandler} className="btn btn-sm btn-secondary">
          Back
        </button>
      </div>
    );
  }
}

export default PostsDetails;
