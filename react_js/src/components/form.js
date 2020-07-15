import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comments: "",
      topic: "react",
    };
  }

  userNameChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  commentsChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  topicChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log(`${this.state.userName}`);
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>Username</label>
          <input
            name="userName"
            type="text"
            value={this.state.userName}
            onChange={this.userNameChangeHandler}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            name="comments"
            value={this.state.comments}
            type="text"
            onChange={this.commentsChangeHandler}
          />
        </div>
        <div>
          <label>Topic</label>
          <select
            name="topic"
            value={this.state.topic}
            onChange={this.topicChangeHandler}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
