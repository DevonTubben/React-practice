import React, { Component } from 'react'
import List from './List'
import Form from './Form'

class App extends Component{
  render(){ 
    const name = "papi"

   // debugger  Always put debugger between your render and return
  return ( // Only thing that should be in your return is a JSX element
    <div className="App">
       <h1>Good Morning {name.toUpperCase()}</h1>
       <Form />
       <List todos={["Walk Dog", "Workout", "Code", "Sauna", "Run"]}/>
    </div>
  );
}
} 
export default App;
