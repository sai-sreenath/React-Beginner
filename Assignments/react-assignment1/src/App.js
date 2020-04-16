import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state={
    username: 'supermax'
  }
  
  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
          <ol>
            <li>Create Two components: UserInput and UserOutput</li>
            <li>UserInput should hold an input element, UserOutput holds two paragraphs</li>
            <li>Output multiple UserOutput components in the App Component(any paragraph text of your choice)</li>
            <li>Pass a username (of your choice) to UserOutput via props and display it here </li>
            <li>Add State to the App Component(=> the username) and pass the username to UserOutput Compoennt</li>
            <li>Add a method to manipulate the state (=> ane event handler method)</li>
            <li>Pass the event handler method reference to the UserInput Component and bind it to input-change event</li>
            <li>Ensure new userinput enetred by user overwrites the old username passed to user output</li>
            <li>Add two-way binding to your input(in userinput) to also display the starting username</li>
            <li>Add styling of your choice to your components/elements in the components - both with inline styles and stylesheets</li>
          </ol>
          <UserInput changed={this.usernameChangedHandler} currentName={this.state.username} />
          <UserOutput userName={this.state.username} />
          <UserOutput userName={this.state.username} />
          <UserOutput userName="Max" />
      </div>
    );
  }
}

export default App;
