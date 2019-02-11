import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-navbar">
              <NavBar/>
        </div>
        
        <Route 
          exact path="/"
          render={props => (
            
            <Landing
              {...props}
            />
          )}
        />

        <Route 
          exact path="/projects"
          render={props => (
            
            <Projects
              {...props}
            />
          )}
        />
        
      </div>
    );
  }
}

export default App;
