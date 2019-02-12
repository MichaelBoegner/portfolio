import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavBarMain=styled.div`
    display: flex; 
    justify-content: space-between;
    font-family: Lato, sans-serif;
    font-weight: 600;
    border-bottom: 2px solid lightgrey;
    border-top: 2px solid lightgrey;
    background-color: #353B3E; 
    align-items: center;
`;

const NavBarLeft=styled.div`

    min-height: 100%;
`;

const NavBarRight=styled.div`
    display: flex; 
    justify-content: space-between;
    align-content: center;

`;

const NavBarLinks=styled(Link)`
    text-decoration: none;
    color: white;
    font-size: .8rem;
    letter-spacing: 0.25rem;
    padding: 20px 25px;


    :hover {
        background-color: lightgray;
        cursor: pointer;

        animation-name: rainbowHover;
        animation-duration: 2s; 
        animation-iteration-count:infinite;
        animation-direction: alternate-reverse;

        @keyframes rainbowHover {
            0% {color: orange;}
            100% {color: blueviolet;}
        }
    }
`;

const NavBarTitle=styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.15rem;
    letter-spacing: 0.20rem;
    padding: 15px 25px;

    :hover {
        background-color: lightgray;
        cursor: pointer;

        animation-name: rainbowHover;
        animation-duration: 2s; 
        animation-iteration-count:infinite;
        animation-direction: alternate-reverse;

        @keyframes rainbowHover {
            0% {color: orange;}
            100% {color: blueviolet;}
        }
    }
`;



export default class NavBar extends Component { 
    render() {
        return (
            <NavBarMain>
                <NavBarLeft>
                    <NavBarTitle to="/">C. MICHAEL BOEGNER</NavBarTitle>
                </NavBarLeft>

                <NavBarRight>
                    <NavBarLinks to="/projects">
                        PROJECTS
                    </NavBarLinks>
                    
                    <NavBarLinks to="/writing">
                        WRITING
                    </NavBarLinks>
                    
                    <NavBarLinks to="/contact">
                        CONTACT
                    </NavBarLinks>
                </NavBarRight>
            </NavBarMain>
        )
    }

}