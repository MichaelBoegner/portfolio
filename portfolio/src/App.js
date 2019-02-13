import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/statics/Header';
import Landing from './components/routes/Landing';
import Projects from './components/projects/Projects';
import Writing from './components/routes/Writing';
import NavBar from './components/statics/NavBar';
import Resume from './components/routes/Resume';
import styled from 'styled-components';

const AppMain=styled.div`
`;

class App extends Component {
  constructor() {
    super(); 
    this.state = {
        opacityCheck: null, 
    }
  }

componentDidMount() {
    this.setState({opacityCheck: "opacity"});
}

  render() {
    return (
      <AppMain>
        <div className="app-navbar">
              <NavBar/>
              <Header opacity={this.state.opacityCheck}/>
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
          exact path="/resume"
          render={props => (
            
            <Resume
              {...props}
            />
          )}
        />

      </AppMain>
    );
  }
}

export default App;
