import React, { Component } from 'react' 

class Item extends Component { 
    render(){ 
        return (
    <li>{this.props.item}</li>
    ) 
} 
} 

export default Item