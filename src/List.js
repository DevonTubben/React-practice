import React, { Component } from 'react' 
import Item from './Item'

class List extends Component { 
    
    // static defaultProps={ 
    //     todos: ["Run"]
    // }
 
    renderItems() { 
        return this.props.todos.map(item => <Item item={item} string="Hello" list={["Eat", "Stretch", "Chores"]}/>)
    }

    handleClick = (e, string) => { 
        console.log("e", e)
        console.log("string", string)
    }


    render(){ 
        return ( 
            <ul> 
                <button onClick={(e) => this.handleClick(e, "You know what time it is")}>Add</button>
                {this.renderItems()}
            </ul>
        )
    }
}

export default List 

//  List.defaultProps={ 
//         todos: ["Eat"]
//     }

/* <ul> 
 <li> Walk Dog</li>
<li> Work Out</li>
<li> Code</li>
<li> Sauna</li>
<li> Run</li> 
</ul> 
Because we created an array of the list in App.js we dont have to put the todos in here
*/