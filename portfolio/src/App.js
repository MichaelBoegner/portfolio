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

    // ================ G E O L O C A T I O N =================//

    if ("geolocation" in navigator) {
      // check if geolocation is supported/enabled on current browser
      navigator.geolocation.getCurrentPosition(
     
        function success(position) {
         // for when getting location is a success
         console.log('latitude', position.coords.latitude, 
                     'longitude', position.coords.longitude);
        },
     
       function error(error_message) {
        // for when getting location results in an error
        console.error('An error has occured while retrieving location', error_message)
      })
    } else {
      // geolocation is not supported
      // get your location some other way
      console.log('geolocation is not enabled on this browser')
    }


    // ================ W E A T H E R  A P I  C A L L =================//
    
    
    
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
