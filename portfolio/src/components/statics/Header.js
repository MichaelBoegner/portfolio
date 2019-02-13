import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profile from '../../images/profile.JPG'

const HeaderMain=styled.div`
`;

const HeaderTop=styled.div`
    border-bottom: 1px solid lightgrey;
    background-color: #F4F7F9;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 0;

    animation-name: projectsFadeIn;
    animation-duration: 1.5s;

    @keyframes projectsFadeIn {
        from {opacity: ${props => props.opacity ? "0" : "1"};}
        to {opacity: 1;} 
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
`;

const ProfileImg=styled.img`
    border: 1px solid lightgrey;
    width: 125px;
    height: 125px;
    border-radius: 50%;
    background-color: white;
    padding: 8px;
`;

const NavBarLinks=styled(Link)`
    text-decoration: none;
`;


export default class Header extends Component { 
    render() {
        return (
            <HeaderMain>
                <HeaderTop opacity={this.props.opacity}>
                    <NavBarLinks to="/">
                        <HeaderTopContent>
                            <ProfileImg src={profile} alt="portfolio pic of Michael Boegner" />
                        </HeaderTopContent>
                        <HeaderTopContent>
                            <h1>C. Michael Boegner</h1>
                            <h2>Software Engineer & Problem Solver</h2>
                        </HeaderTopContent>
                    </NavBarLinks>
                </HeaderTop>
            </HeaderMain>
        )
    }

}