import React, { Component } from "react";
import axios from "axios";

class ClassFetch extends Component {
  state = {
    loading: true,
    error: "",
    post: {},
  };

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          loading: false,
          error: "",
          post: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          error: err,
          post: "",
        });
      });
  }

  render() {
    const { loading, error, post } = this.state;
    return (
      <div>
        {loading ? "loading..." : post.title}
        {error ? "Something went wrong." : null}
      </div>
    );
  }
}

export default ClassFetch;
