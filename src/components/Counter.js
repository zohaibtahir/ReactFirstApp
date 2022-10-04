import { Component } from "react";

class Counter extends Component{

    constructor(){
        super();
        this.state ={
            count:0,
        };
    } 
    
    
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
            <div>
                <h2>Counter: {this.state.count} </h2>
                <button onClick={this.increment}>Increase</button>
            </div>
        )
    }
}

export default Counter;