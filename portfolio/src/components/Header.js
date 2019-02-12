import React, { Component } from 'react';
import styled from 'styled-components';
import profile from '../images/profile.JPG'

const LandingMain=styled.div`

`;

const LandingTop=styled.div`
    border-bottom: 1px solid lightgrey;
    background-color: #F4F7F9;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 550px 50px 550px;
    
`;

const LandingTopContent=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    justify-content: center;

    h1 {
        font-size: 2.8rem;
        font-family: Lato, sans-serif;
        font-weight: 950;
        color: #353B3E;
        letter-spacing: 0.1rem;
        
        animation-name: h1fadeIn;
        animation-duration: 1.5s;

        @keyframes h1fadeIn {
            from {color: #F4F7F9;}
            to {color: #353B3E;}
        }

    }

    h2 {
        font-size: 1.75rem;
        padding-top: 15px;
        font-family: Robato, sans-serif;
        font-weight: 100;
        color: #AAA2A2;
        justify-content: center;
        animation-name: h2fadeIn;
        animation-duration: 1.5s;


        @keyframes h2fadeIn {
            from {color: #F4F7F9;}
            to {color: #AAA2A2;}
        }
    }
`;

const ProfileImg=styled.img`
    border: 1px solid lightgrey;
    width: 125px;
    height: 125px;
    border-radius: 50%;
    background-color: white;
    padding: 8px;
    animation-name: imgFadeIn;
    animation-duration: 1.5s;

        @keyframes imgFadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
        }
`;



export default class Landing extends Component { 
    render() {
        return (
            <LandingMain>
                <LandingTop>
                    <LandingTopContent>
                        <ProfileImg src={profile} alt="portfolio pic of Michael Boegner" />
                    </LandingTopContent>
                    <LandingTopContent>
                        <h1>C. Michael Boegner</h1>
                        <h2>Software Engineer & Problem Solver</h2>
                    </LandingTopContent>
                </LandingTop>
            </LandingMain>
        )
    }

}