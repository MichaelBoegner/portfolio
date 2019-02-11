import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavBarMain=styled.div`
    display: flex; 
    justify-content: space-between;
    align-content: center;
    margin-bottom: 50px;
    font-family: Lato, sans-serif;
    font-weight: 600;
    border-bottom: 1px solid black;
    padding: 15px 0;
`;

const NavBarLeft=styled.div`
    font-size: 1rem;
    letter-spacing: 0.15rem;
    padding-left: 25px; 
`;

const NavBarRight=styled.div`
    display: flex; 
    justify-content: space-between;
    padding-right: 25px;
`;

const NavBarLinks=styled(Link)`
    margin-left: 50px;
    text-decoration: none;
    color: black;
`;



export default class NavBar extends Component { 
    render() {
        return (
            <NavBarMain>
                <NavBarLeft>
                    C. MICHAEL BOEGNER
                </NavBarLeft>
                <NavBarRight>
                    <div>
                        <NavBarLinks to="/projects">PROJECTS</NavBarLinks>
                    </div>
                    <div>
                        <NavBarLinks to="/writing">WRITING</NavBarLinks>
                    </div>
                    <div>
                        <NavBarLinks to="/contact">CONTACT</NavBarLinks>
                    </div>
                </NavBarRight>
            </NavBarMain>
        )
    }

}