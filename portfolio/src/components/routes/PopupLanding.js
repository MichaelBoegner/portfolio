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
  display: ${props => props.formToggled ? 'none' : null};

  .alert {
    width: 500px;
    background: #68659e;
    display: flex;
    flex-direction: column;
    overflow: auto;
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
      button {
        margin: 10px 0px 20px 10px;
        color: white;
        background: #68659e;
        border: 2px solid #ffffff;
        min-width: 100px;
        height: 25px;

        :hover {
          border-color: #3985ac;
          color: #3985ac;
          cursor: pointer;
        }
      }
    }
  }
`;

export default class PopupLanding extends Component {
    
    render() {console.log("popup state", this.props.formToggled)
        return (
        <StyledAlertWrapper
            formToggled={this.props.formToggled}
        >
          <div className='alert'>
            <h2>Are you having fun yet today!? Make sure to hit the switch above before you leave!</h2>
            <div className='button-box'>
                <button 
                    onClick={this.props.toggleForm}
                    >
                    Got It!
                </button>
            </div>
            </div>
        </StyledAlertWrapper>
        )
    }
} 