import React, {Component} from 'react' 

class Button extends Component{ 
    render(){ 
        return( 
            <button onClick={() => this.props.delete(this.props.item)}>X</button>
        )
    }
}

export default Button