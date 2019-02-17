import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/statics/Header';
import Landing from './components/routes/Landing';
import Projects from './components/routes/projects/Projects';
import Writing from './components/routes/writing/Writing';
import NavBar from './components/statics/NavBar';
import Contact from './components/routes/Contact';
import styled from 'styled-components';
import axios from 'axios';


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

          let latitude = position.coords.latitude; 
          let longitude = position.coords.longitude;
          let APIKEY = "51053550d5d7606aabbc6a9f2768f7ec";

          // ================ W E A T H E R  A P I  C A L L =================//

          axios
          .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${APIKEY}`)
          .then(resp => { 
            console.log(resp);
          })
          .catch(err => {
            console.log(err);
          })

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
