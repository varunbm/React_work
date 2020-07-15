import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  state = {
    posts: [],
    error: "",
  };

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log(res.data);
        this.setState({ posts: res.data });
      })
      .catch((err) => {
        this.setState({ error: `Error retriving data` });
        console.log(err);
      });
  }

  render() {
    const { posts, error } = this.state;
    return (
      <div>
        List of Posts.
        {posts.length
          ? posts.map((post) => (
              <div key={post.id}>
                {post.id} -- {post.title}
              </div>
            ))
          : null}
        {error ? <div>{error}</div> : null}
      </div>
    );
  }
}

export default PostList;
