import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Landing extends Component { 
    render() {
        return (
            <div className="landing-main">
                <div className="landing-above">
                    <h1>C. Michael Boegner</h1>
                    <h2>Software Engineer</h2>
                    <div>
                        <Link to="/projects">Projects</Link>
                    </div>
                </div>
            </div>
        )
    }

}