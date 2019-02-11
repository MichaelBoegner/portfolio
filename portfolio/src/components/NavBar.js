import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavBarMain=styled.div`
    display: flex; 
    justify-content: space-between;
    margin-bottom: 50px;
    font-family: Lato, sans-serif;
    font-weight: 600;
    border-bottom: 1px solid black;
`;

const NavBarLeft=styled.div`
    font-size: 1rem;
    letter-spacing: 0.15rem;
    padding: 15px 0;
`;

const NavBarRight=styled.div`
    display: flex; 
    justify-content: space-between;
    padding: 15px 0;
    margin-bottom: 1px;
`;

const NavBarLinks=styled(Link)`
    text-decoration: none;
    color: black;
    padding: 15px 25px;

    :hover {
        background-color: lightgray;
    }
`;



export default class NavBar extends Component { 
    render() {
        return (
            <NavBarMain>
                <NavBarLeft>
                    <div>
                        <NavBarLinks to="/">C. MICHAEL BOEGNER</NavBarLinks>
                    </div>
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