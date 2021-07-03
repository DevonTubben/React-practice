import React, {Component} from 'react' 

class Form extends Component { 
    
    constructor(props) {
        super(props)
      this.state = { 
          item: ''
      }
    } 

    handleSubmit = (e) => { 
        e.preventDefault()
        console.log(this.inputRef.current.value)
    }

    handleChange = (e) => { 
       // console.log("Inside change")
        this.setState({item: e.target.value})
    }

    render(){ 
        return ( 
            <form onSubmit={this.handleSubmit}> 
                <input type="text" ref={this.inputRef} onChange={this.handleChange}/><br/> 
                <input type="submit"/> 
            </form>
        )
    }
}

export default Form