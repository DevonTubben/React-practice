import React, { Component } from 'react' 
import Button from './Button'

const Item = (props) => { 


   
// componentDidMount(){ 
// this.timerId = setInterval(() => console.log(this.props.item, "interval"), 2000)
// }
 
// componentWillUnmount(){ 
// clearInterval(this.timerId)
// }

        return (
    <li>
        {props.item}
        <Button delete={props.delete} item={props.item}/>
    </li>
    ) 
} 

export default Item 

// functional component. presentational.