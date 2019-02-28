import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from './components/statics/Header';
import Landing from './components/routes/Landing';
import Projects from './components/routes/projects/Projects';
import Writing from './components/routes/writing/Writing';
import NavBar from './components/statics/NavBar';
import Contact from './components/routes/Contact';
import styled from 'styled-components';
import axios from 'axios';
import Monty from './images/Monty.mp4';
import Game from './components/Game';


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
        ended: false,// True after intro fun video finishes.
    }
  }

componentDidMount() {
   this.setState({opacityCheck: "opacity"});
  //  let locationCheck, 
  //      APIKEY = "51053550d5d7606aabbc6a9f2768f7ec";

  // // ================ G E O L O C A T I O N =================//

  //   let options = {
  //     enableHighAccuracy: true,
  //     timeout: 5000,
  //     maximumAge: 0
  //   };
    
  //   function success(pos) {
  //     let crd = pos.coords;
  //     locationCheck = {
  //       latitude: crd.latitude,
  //       longitude: crd.longitude,
  //     }
      
  //     getLocation(locationCheck);
  //   }  
    
  //   function error(err) {
  //     console.warn(`ERROR(${err.code}): ${err.message}`);
  //   }

  //   navigator.geolocation.getCurrentPosition(success, error, options);
    


  //   const getLocation = (locationCheck) => {
  //     let latitude = locationCheck.latitude,
  //         longitude = locationCheck.longitude;

  //   // ================ W E A T H E R  A P I  C A L L =================//

  //     axios
  //     .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${APIKEY}&units=imperial`)
  //     .then(resp => { 
  //       console.log("WEATHER",resp);
  
  //       let unixSunrise = resp.data.sys.sunrise, 
  //           unixSunset = resp.data.sys.sunset,
  //           sunrise,
  //           sunset;
        
  //       const timeConverter = (unixTime) => {
  //         var unixTimeConverted = new Date(unixTime * 1000);
  //         let time = unixTimeConverted.getTime();
  
  //         return time;
  //        }
  
  //        sunrise = timeConverter(unixSunrise);
  //        sunset = timeConverter(unixSunset);
  
  //        this.setState({sunrise, sunset}); 
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  //   }
    
  //   // ================ G E T  L O C A L  T I M E =================//

  //   let currentTime = new Date(),
  //       localTime = currentTime.getTime();


  //   this.setState({localTime: localTime})
    
  //   if(localTime > this.state.sunset) {
  //     this.setState({dayNight: "Night"})
  //   } else (
  //     this.setState({dayNight: "Day"})
  //   )



}


handleChange = () => {
  this.setState({ checked: !this.state.checked });
}

endedHandler = () => {
  this.setState({ended: true});
}


  render() {
    console.log("APP STATE", this.state)
    return (
      <div>
        <AppTop>
              <NavBar 
                handleChange={this.handleChange}
                checked={this.state.checked}
              />
        </AppTop>
     
     {(this.state.checked === true && this.state.ended === false) ?
          <IntroVideo 
              autoPlay
              src={Monty}
              type="video/mp4"
              onEnded={this.endedHandler}
          />
      
    : (this.state.ended === true) ?
        <div>
          <Game {...this.state}/>
        </div>
    : 
    
          <AppMain>

            <div>
              <Header 
                {...this.state}
                opacity={this.state.opacityCheck}
                
              />
              
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
      }
      
      </div>
      )
  }
}

export default withRouter(App);
