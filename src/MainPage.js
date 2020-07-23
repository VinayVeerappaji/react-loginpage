import React, {Component} from "react"
import './App.css'
import {Link} from 'react-router-dom'

class MainPage extends Component{
    constructor() {
        super()
        {

        }
        this.handleClick = this.handleClick.bind(this)
        
    }
    handleClick(){
        localStorage.removeItem('authenticated')
    }

    render(){
        
        return (
            <div>
            <Link to='/login' >
            <button onClick= {this.handleClick}>LogOut</button>
            </Link>
            
            <h1>Welcome {localStorage.getItem('user')}</h1>
            </div>
        )
    }
}

export default MainPage