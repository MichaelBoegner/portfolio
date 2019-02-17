import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/statics/Header';
import Landing from './components/routes/Landing';
import Projects from './components/routes/projects/Projects';
import Writing from './components/routes/writing/Writing';
import NavBar from './components/statics/NavBar';
import Contact from './components/routes/Contact';
import styled from 'styled-components';

const AppMain=styled.div`
`;

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
        opacityCheck: null, 
        checked: false,
    }
  }

componentDidMount() {
    this.setState({opacityCheck: "opacity"});
}

handleChange = (checked) => {
  this.setState({ checked });
}

  render() {
    console.log("NAV BAR STATE", this.state)
    return (
      <AppMain>
        <div>
              <NavBar 
                handleChange={this.handleChange}
                checked={this.state.checked}
              />
              
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
