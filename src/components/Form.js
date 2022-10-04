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

    handleSubmit = (event)=>{
        event.preventDefault();
        console.log({
            fname: this.state.firstname,
            lname: this.state.lastname
        }
        )
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleFirstName} type="text" value={this.state.firstname} placeholder="First Name"/>
                    <input onChange={this.handleLastName} type="text" value={this.state.lastname} placeholder="Last Name"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default Form;