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

`;

const NavBarRight=styled.div`
    display: flex; 
    justify-content: space-between;
    min-height: 100%;
`;

const NavBarLinks=styled(Link)`
    text-decoration: none;
    color: black;
    font-size: .8rem;
    letter-spacing: 0.25rem;
    padding: 0 25px;
`;

const NavBarTitle=styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 1.15rem;
    letter-spacing: 0.20rem;
    padding: 0 25px;
`;

const NavHighlight=styled.div`
    padding: 15px 0;

    :hover {
        background-color: lightgray;
    }
`;



export default class NavBar extends Component { 
    render() {
        return (
            <NavBarMain>
                <NavBarLeft>
                    <NavHighlight>
                        <NavBarTitle to="/">C. MICHAEL BOEGNER</NavBarTitle>
                    </NavHighlight>
                </NavBarLeft>

                <NavBarRight>
                    <NavHighlight>
                        <NavBarLinks to="/projects">PROJECTS</NavBarLinks>
                    </NavHighlight>
                    <NavHighlight>
                        <NavBarLinks to="/writing">WRITING</NavBarLinks>
                    </NavHighlight>
                    <NavHighlight>
                        <NavBarLinks to="/contact">CONTACT</NavBarLinks>
                    </NavHighlight>
                </NavBarRight>
            </NavBarMain>
        )
    }

}