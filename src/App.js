import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import MainBody from "./components/mainBodyComponent";
import "bootstrap/dist/css/bootstrap.css";
import PostsDetails from "./components/postDetailsComponent";
import HomeComponent from "./components/homeComponent";
import NavBar from "./components/navBar";
import NotFound from "./components/notFoundComponent";

const urlEndPoint = "https://jsonplaceholder.typicode.com/posts";
class App extends Component {
  state = {
    posts: [],
    pageSize: 5,
    currentPage: 1
  };

  async componentDidMount() {
    const { data: posts } = await axios.get(urlEndPoint);
    this.setState({ posts });
  }

  clickHandler = post => {
    console.log("Clicked", post.id);
  };

  getData() {
    console.log("Getting Data from server");
  }

  scrollHandler() {
    console.log("**********");
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      this.getData();
    }
  }

  pageChangeHandler = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div onScroll={this.scrollHandler} className="App">
        <NavBar />
        <header className="App-header">React web application</header>
        <div>
          <Switch>
            <Route path="/posts/:id" component={PostsDetails} />
            <Route
              path="/posts"
              render={props => (
                <MainBody
                  data={this.state.posts}
                  onClick={this.clickHandler}
                  {...props}
                  invokeApi={this.getData}
                  pageSize={this.state.pageSize}
                  currentPage={this.state.currentPage}
                  pageHandler={this.pageChangeHandler}
                />
              )}
            />
            <Route path="/" exact component={HomeComponent} />
            <Route path="/notfound" component={NotFound} />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
