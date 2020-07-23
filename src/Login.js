import React, {Component} from "react"
import './App.css'
import { Redirect } from "react-router"

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            authenticated: localStorage.getItem("authenticated"), 
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
        const usernameToCheck = 'username';
        const passwordToCheck = 'password'
        if (usernameToCheck === this.state.username && passwordToCheck === this.state.password){
            localStorage.setItem('authenticated',true);
            this.setState({
                authenticated: true
            })  
        }
        else{
            alert('Wrong Credentials')
        }
    }
    
    render() {
        if(this.state.authenticated){
            return(
                <Redirect to='/mainpage'/>
            )
        }


        return (
            <div className="container">
                <h1>Login Form</h1>
                <br/>
                <form>
                    <input className="text-content"
                        type="text" 
                        value={this.state.username} 
                        name="username" 
                        placeholder="User Name" 
                        onChange={this.handleChange}
                    />
                    <br /><br/>
                    <input className="text-content"
                        type="password" 
                        value={this.state.password} 
                        name="password" 
                        placeholder="Password" 
                        onChange={this.handleChange}
                    /><br/><br/>
                    <input className="submit-button"type="submit" onClick={this.handleFormSubmit} />                    
                 </form>
                
            </div>
            
        )
    }
}

export default Login
