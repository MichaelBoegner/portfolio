import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavBarMain=styled.div`
    display: flex; 
    justify-content: space-between;
    font-family: Lato, sans-serif;
    font-weight: 600;
    border-bottom: 1px solid lightgrey;
    color: #5A452A;
`;

const NavBarLeft=styled.div`
    padding: 15px 0;
`;

const NavBarRight=styled.div`
    display: flex; 
    justify-content: space-between;
    padding: 15px 0;
    margin-bottom: 1px;
    height: 100%;
`;

const NavBarLinks=styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 1rem;
    letter-spacing: 0.25rem;
    padding: 15px 25px;

    :hover {
        background-color: lightgray;
    }
`;

const NavBarTitle=styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 1rem;
    letter-spacing: 0.35rem;
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
                        <NavBarTitle to="/">C. MICHAEL BOEGNER</NavBarTitle>
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