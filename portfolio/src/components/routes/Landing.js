import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const LandingMain=styled.div`
    margin: 2% 35%;
`;

const LandingBottom=styled.div`
    display: flex;
    animation-name: fadeIn;
    animation-duration: 1.5s;

    h3 {
        font-size: 1.50rem;
        margin-bottom: 15px;
        font-family: Robato, sans-serif;
        font-weight: 600;
        color: #353B3E;
        justify-content: center;
        animation-name: fadeIn;
        animation-duration: 1.5s;

        @keyframes fadeIn {
            from {color: white;}
            to {color: #353B3E;}
        }
    }

    @keyframes fadeIn {
        from {color: white;}
        to {color: #353B3E;}
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
        animation-name: fadeIn;
        animation-duration: 1.5s;

        @keyframes fadeIn {
            from {color: white;}
            to {color: #353B3E;}
        }
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
    animation-name: fadeIn;
    animation-duration: 1.5s;

    @keyframes fadeIn {
        from {color: white;}
        to {color: #353B3E;}
    }

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
        console.log("THIS.STATE", this.state)
        return (
            <LandingMain>
                <LandingBottom>
                    <LandingBottomContentLeft>
                        <h3>About me</h3>
                        
                        <p> Michael Boegner loves programming, writing, guitar, and walking until all of his problems are solved (aka hiking). 
                            He is a recent graduate of Lambda School's Full-Stack Web-Development program.
                            Lambda School is a 30-week Computer Science and Software Engineering Academy that provides an immersive (full-time, 50 hrs/wk) 
                            hands-on curriculum, with a focus on computer science, software engineering and web development. In addition to being excited about
                            web-development and the prospects of an ISA driven world, Michael has just started down the path of machine learning through the likes of 
                            <a href="https://www.fast.ai" target="_blank"> fast.ai</a>. 
                        </p>
                    </LandingBottomContentLeft>
                    <LandingBottomContentRight>
                        <h3>Contact</h3>
                        
                        <Link to="/contact">
                            <Icon>
                                <i class="fas fa-envelope-square"></i><p>Email</p>
                            </Icon>
                        </Link>
                        <a href="https://www.linkedin.com/in/c-michael-boegner-855a9741/" target="_blank" rel="noopener noreferrer">
                            <Icon>
                                <i class="fab fa-linkedin"></i><p>LinkedIn</p>
                            </Icon>
                        </a> 

                        <a href="https://github.com/MichaelBoegner" target="_blank" rel="noopener noreferrer">
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