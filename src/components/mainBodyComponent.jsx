import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "./paginationComponent";
import { paginate } from "../utils/pagination";

class MainBody extends Component {
  constructor(props) {
    super(props);
    window.addEventListener("scroll", this.handleScroll, true);
  }

  render() {
    const posts = paginate(
      this.props.data,
      this.props.currentPage,
      this.props.pageSize
    );
    return (
      <div>
        <p>API Response</p>
        <table className="table table-light">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th />
            </tr>
          </thead>
          <tbody className="tbody">
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <Link to={`/posts/${post.id}`}>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => this.props.onClick(post)}
                    >
                      Click
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemLength={this.props.data.length}
          pageSize={this.props.pageSize}
          onPageChange={this.props.pageHandler}
          currentPage={this.props.currentPage}
        />
      </div>
    );
  }
}

export default MainBody;
