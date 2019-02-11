import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class NavBar extends Component { 
    render() {
        return (
            <div className="navbar-main">
                <div className="navbar-left">
                    C. MICHAEL BOEGNER
                </div>
                <div className="navbar-right">
                    <Link to="/projects">Projects</Link>
                    <Link to="/writing">Writing</Link>
                </div>
            </div>
        )
    }

}