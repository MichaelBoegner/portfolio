import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import portfoliopic from '../../images/portfoliopic.JPG';

const HeaderMain=styled.div`
`;

const HeaderTop=styled.div`
    border-bottom: 1px solid lightgrey;
    background-color: ${props => props.checked ? "skyblue" : "#F4F7F9"};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4% 0 2% 0;

    animation-name: projectsFadeIn;
    animation-duration: 1.5s;

    @keyframes projectsFadeIn {
        from {opacity: ${props => props.opacity ? "0" : "1"};}
        to {opacity: 1;} 
    }


    @media (max-width: 1024px) {
        padding: 8% 0 4% 0;
    }
    
    @media (max-width: 768px) {
       width: 100vw;
       padding: 4% 0;
    }
`;

const HeaderTopContent=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    justify-content: center;


    :hover {
        cursor: pointer;
    }

    h1 {
        font-size: 2.8rem;
        font-family: Lato, sans-serif;
        font-weight: 950;
        color: #353B3E;
        letter-spacing: 0.1rem;
    }

    h2 {
        font-size: 1.75rem;
        padding-top: 15px;
        font-family: Robato, sans-serif;
        font-weight: 100;
        color: #AAA2A2;
        justify-content: center;
    }

    h4 {
        font-size: .85rem;
        padding-top: 5px;
        font-family: Robato, sans-serif;
        font-weight: 100;
        color: #AAA2A2;
        justify-content: center;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.2rem;
        }

        h2 {
            font-size: 1.25rem;
        }

        h4 {
            font-stretch: condensed;
        }
    }
`;

const ProfileImg=styled.img`
    border:  ${props => props.checked ? "5px solid yellow" : "5px solid lightgrey"};
    width: 150px;
    border-radius: 100%;

    animation-name: ${props => props.checked ? "sunMoon" : null};
    animation-duration: 5s;
    animation-play-state: ${props => props.checked ? "running" : "paused"};
    position: relative;

    @keyframes sunMoon {
        0%   {left:0%; top:0px;}
        25%  {left:-50%; top: 150px;}
        50%  {left:0; top:50%;}
        75%  {left:0px; top:200px;}
        100% {left:0px; top:0px;}
    }
`;

const NavBarLinks=styled(Link)`
    text-decoration: none;
`;


export default class Header extends Component { 
    render() { console.log("THIS.PROPS", this.props)
        return (
            <HeaderMain>
                <HeaderTop 
                    opacity={this.props.opacity}
                    checked={this.props.checked}
                    >
                    <NavBarLinks to="/">
                        <HeaderTopContent>
                            <ProfileImg 
                                src={portfoliopic} 
                                alt="portfolio pic of Michael Boegner" 
                                checked={this.props.checked}
                            />
                        </HeaderTopContent>
                        <HeaderTopContent>
                            <h1>C. Michael Boegner</h1>
                            <h2>Software Engineer & Problem Solver</h2>
                            <h4>React | JavaScript | Python | C | MySQL | Node | HTML | CSS</h4>
                        </HeaderTopContent>
                    </NavBarLinks>
                </HeaderTop>
            </HeaderMain>
        )
    }

}