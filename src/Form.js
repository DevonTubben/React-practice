import React, {Component} from 'react' 

class Form extends Component { 
    
    constructor(props) {
        super(props)
      this.state = { 
          item: ''
     //     otherItem: '' would need , after item if I wanted the 2nd form
      }
    } 

    handleSubmit = (e) => { 
        e.preventDefault()
     //   console.log(this.inputRef.current.value)
     this.props.handleSubmit(this.state)
     this.setState({item: ''})
    }

    handleChange = (e) => { 
       // console.log("Inside change")
        this.setState({[e.target.name]: e.target.value})
        //is equivalent to: 
        //this.setState({["item"]: e.target.value})
    }

    // handleOtherChange = (e) => { 
    //     this.setState({ otherItem: e.target.value})
    // }
    // in render under the first <input if you wanted 2 forms     <input type="text" name="otherItem" value={this.state.otherItem} onChange={this.handleChange}/><br/> 
    //

    render(){ 
        return ( 
            <form onSubmit={this.handleSubmit}> 
                <input type="text" name="item" value={this.state.item} onChange={this.handleChange}/><br/>
                <input type="submit"/> 
            </form>
        )
    }
}

export default Form