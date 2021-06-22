import React, { Component } from 'react'
import List from './List'

class App extends Component{
  render(){ 
    const name = "papi"

   // debugger  Always put debugger between your render and return
  return ( // Only thing that should be in your return is a JSX element
    <div className="App">
       <h1>Hello {name.toUpperCase()}</h1>
       <List name={name}/>
    </div>
  );
}
} 
export default App;
