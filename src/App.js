import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'


const App = props => {
    
  const [personsState, setPersonsState] = useState({
      persons: [
        {name: 'Max', age:28},
        {name: 'Manu', age:29},
        {name: 'Stephanie', age:26}
      ],
      otherState: 'Some other value'
  });

  const [otherState,setOtherState] = useState('Some Other Value');

  const switchNameHandler = () => {
    //Shouldnt do this: this.state.persons[0].name='Maxmillan';
    setPersonsState({
      persons: [
        {name: 'Maxmillan', age:28},
        {name: 'Manu', age:29},
        {name: 'Stephanie', age:27}
      ],
     // otherState: personsState.otherState
    })
  };
  
  return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
  }


export default App;


  
  