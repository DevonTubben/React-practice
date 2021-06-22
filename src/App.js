import React, { Component } from 'react'
class App extends Component{
  render(){ 
    debugger // Always put debugger between your render and return
  return ( // Only thing that should be in your return is a JSX element
    <>
    <div className="App">
       <h1>Hello World!</h1>
    </div>
    <div> 
      <h1>Call Me Papi</h1>
      </div>
      </>
  );
}
} 
export default App;
