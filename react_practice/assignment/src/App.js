import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputComponent from './InputComponent/InputFile';
import OutputComponent from './OutputComponent/OutputFile';

class App extends Component{
  state = {
    username: 'Varun Bhadravathi Manjula'
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Learning React</h1>
        <p>Assignment - 1</p>
        <InputComponent change={this.usernameChangeHandler} currentName={this.state.username}/>
        <OutputComponent userName={this.state.username}/>
        <OutputComponent userName={this.state.username}/>
        <OutputComponent userName="Varun"/>
      </div>
    );
  }
}

export default App;
