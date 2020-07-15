import React, { Component } from "react";
import axios from "axios";
class PostListPost extends Component {
  state = {
    userID: "",
    title: "",
    body: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, this.state)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    const { userID, title, body } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>UserID</label>
          <input
            type="text"
            name="userID"
            value={userID}
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <label>Body</label>
          <input
            type="text"
            name="body"
            value={body}
            onChange={this.changeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default PostListPost;
