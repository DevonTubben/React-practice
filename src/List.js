import React, { Component } from 'react' 

class List extends Component { 
 
    renderItems() { 
        return this.props.todos.map(item => <li>{item}</li>)
    }
    render(){ 
        return ( 
            <ul> 
                {this.renderItems()}
            </ul>
        )
    }
}

export default List 


/* <ul> 
 <li> Walk Dog</li>
<li> Work Out</li>
<li> Code</li>
<li> Sauna</li>
<li> Run</li> 
</ul> 
Because we created an array of the list in App.js we dont have to put the todos in here
*/