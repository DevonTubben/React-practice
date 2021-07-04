import React, { Component } from 'react' 
import Item from './Item' 
import Form from './Form'

class List extends Component { 
    
    constructor(){ 
        // Inside our constructor we must call the super method before setting our initial state
        // The super method refers to the contructor method in the parent class (component)
        // By calling super we are executing the constructor defined in component which is absolutely necessary because that constructor defines important attributes on our instance - most notably, props
        super()
        this.state = { 
            todos: ["Eat", "Sleep", "Chores", "Watch sports"],
       //     list: ["Run"]
        }
        console.log("constructor")
    }

    componentDidMount(){ 
        console.log("component did mount")
        //component did mount is called last after the constructor and render
        //render is the only one that can get called multiple times
    }

    renderItems() { 
        return this.state.todos.map(item => <Item item={item} delete={this.deleteItem}/>)
    }

    // handleClick = () => { 
    //    console.log("e", e)
    //    console.log("string", string)
    //     this.setState({ 
    //        todos: [...this.state.todos, "Take Dog Out"]
    //     })
    //     this.setState((prevState) => ({todos: [...prevState.todos, "Sleep"]}))
    //     this.setState((prevState) => ({todos: [...prevState.todos, "Lay Out"]}))
    // }
// this.setState

    addItem = (formData) => { 
        this.setState((prevState) => ({todos: [...prevState.todos, formData.item]}))
    }

    deleteItem = (item) => { 
        console.log('item', item)
    }

    
    render(){ 
        // render should always be at the bottom because it is whats being returned
        console.log("render")
        return ( 
            <> 
                <Form handleSubmit={this.addItem}/>
            <ul> 
                {this.renderItems()}
            </ul>
            </>
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