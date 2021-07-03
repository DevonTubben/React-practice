import React, { Component } from 'react' 
import Button from './Button'

class Item extends Component { 
    render(){ 
        return (
    <li>
        {this.props.item}
        <Button delete={this.props.item}/>
    </li>
    ) 
} 
} 

export default Item