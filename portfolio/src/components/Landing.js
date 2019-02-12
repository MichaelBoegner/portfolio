import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profilebw from '../images/profilebw.JPG'

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

const LandingBottom=styled.div`
    margin-top: 50px;
    display: flex;
    padding: 15px 650px 15px 650px;

    h3 {
        font-size: 1.50rem;
        margin-bottom: 15px;
        font-family: Robato, sans-serif;
        font-weight: 600;
        color: #353B3E;
        justify-content: center;
    }
`;

const LandingBottomContentLeft=styled.div`
    width: 75%;
    padding-right: 25px; 
    

    p {
        font-size: .95rem;
        font-family: Merriweather, sans-serif;
        line-height: 1.75;
        font-weight: 100;
        letter-spacing: 0.025rem;
    }

    a {
        text-decoration: none;
    }
`;

const LandingBottomContentRight=styled.div`
    width: 25%;

    a {
        text-decoration: none;
        color: black;
    }
`;

const Icon=styled.div`
    display: flex; 
    text-decoration: none;

    :hover {
            color: #19698F;
            cursor: pointer;
        }

    .fas {
        margin: 10px;
        font-size: 200%;
    }

    .fab {
        margin: 10px;
        font-size: 200%;
    }

    p {
        font-size: .95rem;
        display: flex;
        align-items: center;
    }

`;



export default class Landing extends Component { 
    render() {
        return (
            <LandingMain>
                <LandingTop>
                    <LandingTopContent>
                        <ProfileImg src={profilebw} alt="portfolio pic of Michael Boegner" />
                    </LandingTopContent>
                    <LandingTopContent>
                        <h1>C. Michael Boegner</h1>
                        <h2>Software Engineer</h2>
                    </LandingTopContent>
                </LandingTop>
                <LandingBottom>
                    <LandingBottomContentLeft>
                        <h3>About me</h3>
                        
                        <p> Michael Boegner loves programming, writing, guitar, and walking until all of his problems are solved (aka hiking). 
                            He is a recent graduate of Lambda School's Full-Stack Web-Development program.
                            Lambda School is a 30-week Computer Science and Software Engineering Academy that provides an immersive (full-time, 50 hrs/wk) 
                            hands-on curriculum, with a focus on computer science, software engineering and web development. In addition to being excited about
                            web-development and the prospects of an ISA driven world, Michael has just started down the path of machine learning through the likes of 
                            <a href="https://wwww.fast.ai" target="_blank"> fast.ai</a>. 
                        </p>
                    </LandingBottomContentLeft>
                    <LandingBottomContentRight>
                        <h3>Contact</h3>
                        
                        <Link to="/contact">
                            <Icon>
                                <i class="fas fa-envelope-square"></i><p>Email</p>
                            </Icon>
                        </Link>
                        <a href="https://www.linkedin.com/in/c-michael-boegner-855a9741/" target="_blank">
                            <Icon>
                                <i class="fab fa-linkedin"></i><p>LinkedIn</p>
                            </Icon>
                        </a> 

                        <a href="https://github.com/MichaelBoegner" target="_blank">
                            <Icon>
                                <i class="fab fa-github-square"></i><p>GitHub</p>
                            </Icon>
                        </a>
                    </LandingBottomContentRight>
                </LandingBottom>
            </LandingMain>
        )
    }

}