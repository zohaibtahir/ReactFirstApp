import { Component } from "react";

class Form extends Component{

    state = {
        firstname:"",
        lastname:"",
    }

    handleFirstName = (event)=>{
        this.setState({
            firstname: event.target.value,
        })
    }
    handleLastName = (event)=>{
        this.setState({
            lastname: event.target.value,
        })
    }

    render(){
        return (
            <div>
                <form action="">
                    <input onChange={this.handleFirstName} type="text" value={this.state.firstname} placeholder="First Name"/>
                    <input onChange={this.handleLastName} type="text" value={this.state.lastname} placeholder="Last Name"/>
                </form>
            </div>
        )
    }

}

export default Form;