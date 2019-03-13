import React, {Component} from 'react';
import styled from 'styled-components';

const StyledAlertWrapper = styled.div`
  height: 100%;
  z-index: 3001;
  width: 100vw;
  background: #00000080;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  display: none;
  /* display: ${props => props.formToggled ? 'none' : null}; */


  .alert {
    width: 500px;
    display: flex; 
    flex-direction: column;
    font-family: Lato, sans-serif;
    font-weight: 600;
    border-bottom: 2px solid lightgrey;
    border-top: 2px solid lightgrey;
    background-color: #353B3E; 
    align-items: center;
    overflow: auto;
    padding: 25px;
    

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100vw; 
    }

    h2 {
      font-family: "Merriweather", sans-serif;
      font-size: 22px;
      color: white;
      margin: 30px 0 10px;
      line-height:1.5;
    }
    p{
      font-size:18px;
      color:white;
      margin:15px 25px;;
      line-height:1.5;
      text-align:left;
    }
    .button-box {
      width: 400px;
      margin: 0 auto;
      display: flex;
      justify-content:${ props=> props.spaceBetween ?'space-between':'center'};

      a {
        margin: 10px 0px 20px 10px;
        color: white;
        background: #68659e;
        border: 2px solid #ffffff;
       padding: 0 10px;
        height: 25px;
        text-decoration: none;
        :hover {
          border-color: #3985ac;
          color: #3985ac;
          cursor: pointer;
        }
      }
     

        :hover {
          border-color: #3985ac;
          color: #3985ac;
          cursor: pointer;
        }
      }
    }
  }
`;

const Button=styled.div `
    text-decoration: none;
    color: white;
    font-size: .8rem;
    letter-spacing: 0.25rem;
    padding: 15px 25px;

    :hover {
        background-color: lightgray;
        cursor: pointer;

        animation-name: rainbowHover;
        animation-duration: 1.25s; 
        animation-iteration-count:infinite;
        animation-direction: alternate-reverse;

        @keyframes rainbowHover {
            0% {color: lightgrey;}
            100% {color: #353B3E;}
    }
`;
  

export default class PopupLanding extends Component {
    
    render() {console.log("popup state", this.props.formToggled)
        return (
        <StyledAlertWrapper
            formToggled={this.props.formToggled}
        >
          <div className='alert'>
            <h2>
              Have some fun on the house!
            </h2>
            <h2>  
              Hit the switch above!
            </h2>
            <div className='button-box'>
                <Button 
                    onClick={this.props.toggleForm}
                    >
                    Got It!
                </Button>
            </div>
            </div>
        </StyledAlertWrapper>
        )
    }
} 