import React, { Component } from 'react'



class Error extends Component {
    
constructor (props){
    super(props);
    this.state ={hasError:false}
}


    componentDidCatch(error, info){
        this.setState({hasError:true})
    }
    render() { 
        if(this.state.hasError){
            <h1>ERROR</h1>
return <h1>404 Page not found</h1>

        }
        return this.props.children
    }
}
 
export default Error;