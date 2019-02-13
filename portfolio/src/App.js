import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Writing from './components/Writing';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import styled from 'styled-components';

const AppMain=styled.div`
`;

class App extends Component {
  render() {
    return (
      <AppMain>
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

        <Route 
          exact path="/writing"
          render={props => (
            
            <Writing
              {...props}
            />
          )}
        />

        <Route 
          exact path="/contact"
          render={props => (
            
            <Contact
              {...props}
            />
          )}
        />

      </AppMain>
    );
  }
}

export default App;
