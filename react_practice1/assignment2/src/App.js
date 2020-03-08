import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputFile from './CustomeComponent/InputFile';
import Validation from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    userInput: ''
  }

  inputEventChangeHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedtext = text.join('');
    this.setState({userInput: updatedtext})
  }

  render(){

    const charList = this.state.userInput.split('').map((ch,index) => {
      return <CharComponent 
      char={ch} 
      key={index}
      clicked={this.deleteCharHandler.bind(this,index)}
      />;
    })

    return (
      <div className="App">
        <h1>Learning React</h1>
        <p>Assignment 2</p>
        <input type="text" 
          onChange={this.inputEventChangeHandler} 
          value={this.state.userInput}
          />
        <InputFile name={this.state.userInput}/>
        <Validation length={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
