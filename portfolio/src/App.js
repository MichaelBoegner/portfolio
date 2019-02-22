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
import Monty from './images/Monty.mp4';


const AppMain=styled.div`
`;

const IntroVideo=styled.video`
  width: 100vw; 
  height: 100vh;
  background-color: black;
`;

const AppTop=styled.div`
  z-index: 3;
  position: fixed;
  width: 100%;

  @media (max-width: 768px) {
    z-index: 0;
    position: relative;
  }
`;

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
        opacityCheck: null, // True after user's arrival to keep header from fading in repeatedly.
        checked: false, // True if fun switch is thrown.
        sunrise: "",
        sunset: "",
        localTime: "",
        dayNight: "",
        display: true, // Display state hides the fun switch when false to allow for deploy until stage two is completed.
        ended: false,
    }
  }

componentDidMount() {
   this.setState({opacityCheck: "opacity"});
   let location, 
       APIKEY = "51053550d5d7606aabbc6a9f2768f7ec";

  // ================ G E O L O C A T I O N =================//

    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    function success(pos) {
      let crd = pos.coords;
      location = {
        latitude: crd.latitude,
        longitude: crd.longitude,
      }
      
      getLocation(location);
    }  
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
    


    const getLocation = (location) => {
      let latitude = location.latitude,
          longitude = location.longitude;

    // ================ W E A T H E R  A P I  C A L L =================//

      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${APIKEY}&units=imperial`)
      .then(resp => { 
        console.log("WEATHER",resp);
  
        let unixSunrise = resp.data.sys.sunrise, 
            unixSunset = resp.data.sys.sunset,
            sunrise,
            sunset;
        
        const timeConverter = (unixTime) => {
          var unixTimeConverted = new Date(unixTime * 1000);
          let time = unixTimeConverted.getTime();
  
          return time;
         }
  
         sunrise = timeConverter(unixSunrise);
         sunset = timeConverter(unixSunset);
  
         this.setState({sunrise, sunset}); 
      })
      .catch(err => {
        console.log(err);
      })
    }
    
    // ================ G E T  L O C A L  T I M E =================//

    let currentTime = new Date(),
        localTime = currentTime.getTime();


    this.setState({localTime: localTime})
    
    if(localTime > this.state.sunset) {
      this.setState({dayNight: "Night"})
    } else (
      this.setState({dayNight: "Day"})
    )
}



handleChange = (checked) => {
  this.setState({ checked });
}

endedHandler = () => {
  this.setState({checked: false});
}

  render() {
    console.log("APP STATE", this.state)

    if(this.state.checked === true && this.state.ended === false) {
      return(
        <IntroVideo 
            autoPlay
            src={Monty}
            type="video/mp4"
            onEnded={this.endedHandler}
        />
      )
    } else {
    return (
      <AppMain>
        <AppTop>
              <NavBar 
                handleChange={this.handleChange}
                checked={this.state.checked}
                display={this.state.display}
              />
        </AppTop>
        
        <div>
              <Header 
              {...this.state}
              opacity={this.state.opacityCheck}/>

        
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
        </div>
      </AppMain>
    );
          }
  }
}

export default App;
