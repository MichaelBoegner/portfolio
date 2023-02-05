import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from './components/statics/Header';
import Landing from './components/routes/Landing';
import Projects from './components/routes/projects/Projects';
import Mindfulness from './components/routes/Mindfulness';
import Writing from './components/routes/writing/Writing';
import NavBar from './components/statics/NavBar';
import Contact from './components/routes/Contact';
import styled from 'styled-components';
import Monty from './images/Monty.mp4';
import Game from './components/Game';


const AppMain=styled.div``;

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
        userArrived: false, // True after user's arrival to keep header from fading in repeatedly.
        checked: false, // True if fun switch is thrown.
        sunrise: "",
        sunset: "",
        localTime: "",
        dayNight: "",
        ended: false,// True after intro fun video finishes.
        formToggled: null, 
        mobile: false,
        width: window.innerWidth,
    }
  }


componentDidMount() {
  this.setState({userArrived: true});
  this.handleWindowSizeChange();




}


handleChange = () => {
  this.setState({ checked: !this.state.checked });
  window.sessionStorage.alerted = true; 
}

endedHandler = () => {
  this.setState({ ended: true });
}

toggleForm = () => {
    this.setState({ formToggled: 'toggled' });
}

handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
  this.handleWindowSizeCheck()
};

handleWindowSizeCheck = () => {
  const { width } = this.state;
  const isMobile = width <= 768;

  if(isMobile) {
    this.setState({ mobile: true });
  }
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
    
          <AppMain
            {...this.state}
            mobile={this.state.mobile}
          >

            <div>
              <Header 
                {...this.state}
                opacity={this.state.userArrived}
                
              />
              
              <Route 
                exact path="/"
                render={props => (
                  
                  <Landing
                    {...this.state}
                    {...props}
                    toggleForm={this.toggleForm}
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
                exact path="/mindfulness"
                render={props => (
                  
                  <Mindfulness
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