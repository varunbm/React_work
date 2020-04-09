import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardLists from "./components/cardListComponent/cardListComponent";
import FormComponent from "./components/FormComponent/formCOmponent";
import axios from "axios";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     apiData: data,
  //   };
  // }

  // userName = React.createRef();

  state = {
    apiData: [],
    user_name: "",
  };

  submitHandler = async (event) => {
    event.preventDefault();
    const res = await axios.get(
      `https://api.github.com/users/${this.state.user_name}`
    );

    this.setState({
      apiData: [...this.state.apiData, res.data],
      user_name: "",
    });
    // console.log("UserName is :", this.userName.current.value);
  };

  OnChangeHandler = (event) => {
    this.setState({ user_name: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h2>{this.props.title}</h2>
        <FormComponent
          val={this.state.user_name}
          on_change={this.OnChangeHandler}
          submit={this.submitHandler}
          // reference={this.userName}
        />
        <CardLists data={this.state.apiData} />
      </div>
    );
  }
}

export default App;
