import React, {Component} from "react"
import './App.css'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }
    

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit (event) {
        const user = this.state.username
    
        localStorage.setItem('user', user);
    }
    
    render() {
        return (
            <div className="container">
                <h1>Login Form</h1>
                <br/>
                <form>
                    <input 
                        type="text" 
                        value={this.state.username} 
                        name="username" 
                        placeholder="User Name" 
                        onChange={this.handleChange}
                    />
                    <br /><br/>
                    <input 
                        type="password" 
                        value={this.state.password} 
                        name="password" 
                        placeholder="Password" 
                        onChange={this.handleChange}
                    /><br/><br/>
                    <input type="submit" onClick={this.handleFormSubmit} />                    
                 </form>
                 {/* <h1>{ console.log(this.props.countries) }</h1> */}
            </div>
            
        )
    }
}

export default Login
