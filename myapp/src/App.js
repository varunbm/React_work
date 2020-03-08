import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './NewComponent/sample'

class App extends Component {
  state = {
    person: [
      { id: 'fdfs2',name:"Varun", age:31},
      { id: 'fsdf2',name:"Sam", age:29},
      { id: 'jhgj2',name:"John", age:35}
    ],
    showPersons: false
  }

  switchNameHandler = (newValue) => {
    // console.log("Called ")
    // this.state.person
    this.setState({
      person: [
        { name: newValue, age:31},
        { name:"Sam", age:29},
        { name:"John", age:33}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        { name: "Varun BM", age:31},
        { name: event.target.value, age:29},
        { name:"John", age:33}
      ]
    })
  }
  deletePersonHandler = (personIndex) => {
    // const per = this.state.person.splice()
    const per = [...this.state.person]
    per.splice(personIndex,1);
    this.setState({person: per})
  }

  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {
    const style={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.person.map((x,index) => {
              return <Person
                click={this.deletePersonHandler.bind(this,index)}
                name={x.name}
                age={x.age}
                key={x.id}
              />
            })
          }
          {/* <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age}/>
          <Person 
          click={this.switchNameHandler.bind(this,"Varun B Manjula")} 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          change={this.nameChangeHandler}
          >Coolest Person...</Person>
          <Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age}/> */}
        </div>
      );
    }


  return (
    <div className="App">
      <h1>React application</h1>
      <p> Sample app </p>

      <button
      style={style} 
      onClick={this.toggleHandler}>Toggle Persons</button>
      {persons}
    </div>
  );
 }
}

export default App;
