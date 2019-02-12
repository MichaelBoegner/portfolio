import React, { Component } from 'react';
import Header from './Header';
import ProjectCards from './ProjectCards';
import styled from 'styled-components';
import FamilyTabs from '../images/FamilyTabs.JPG';
import GameLife from '../images/GameLife.JPG';
import Seinfeld from '../images/Seinfeld.JPG';

const ProjectsMain=styled.div`
`;

const ProjectsBottom=styled.div`
    height: 50%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation-name: fadeIn;
    animation-duration: 2s;

    @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
    }
`;

const ProjectCardsMain1=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: top;
    padding: 5% 20%;
    border-bottom: 1px solid lightgrey;
`;

const ProjectCardsMain2=styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: top;
    padding: 5% 20%;
    border-bottom: 1px solid lightgrey;
`;

const ProjectCardsMain3=styled.div`
    display: flex;
    align-items: top;
    padding: 5% 20%;
    border-bottom: 1px solid lightgrey;
`;

const ProjectCardsCard=styled(ProjectCards)`

`;

const ProjectCardBio=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 50px; 
    width: 70%;
    margin: 0 5%;
    font-family: Lato, sans-serif;
    font-weight: 600;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 15px;
        font-family: Robato, sans-serif;
        font-weight: 600;
        color: #353B3E;
        justify-content: center;
    }

    h2 {
        font-size: 1.75rem;
        padding-top: 15px;
        font-family: Robato, sans-serif;
        font-weight: 400;
        color: #AAA2A2;
        justify-content: center;
        :hover {
            animation-name: fadeIn;
            animation-duration: .5s;
            animation-fill-mode: forwards; 

            @keyframes fadeIn {
                from {color: #AAA2A2;}
                to {color: #353B3E;}
            }
        }
    }

    p {
        font-size: .95rem;
        font-family: Merriweather, sans-serif;
        line-height: 1.75;
        font-weight: 100;
        letter-spacing: 0.025rem;
        margin: 25px 0;
    }

    a {
        text-decoration: none;
    }
`;



export default class Projects extends Component { 
    constructor(){
        super();
    }

    render() {
        return (
            <ProjectsMain>

                <Header/>

                <ProjectsBottom>

                    <ProjectCardsMain1>
                        <ProjectCardsCard
                            img={FamilyTabs}
                        />

                        <ProjectCardBio> 
                            <h3>Family Tabs</h3>
                            <p>
                                Family Tabs offers any parent a quick and 
                                easy way to organize and keep track of 
                                their family’s events. Using the site allows them
                                to manage everyone's schedules, get a day's agenda at a glance,
                                approve and manage any conflicts, as well as get notified of new
                                and/or upccoming events.
                            </p>
                            
                            <a href="https://family-tabs.netlify.com" target="_blank" rel="noopener noreferrer">
                                <h2>WEBSITE</h2>
                            </a>

                            <a href="https://github.com/Lambda-School-Labs/labs9-family-tabs" target="_blank" rel="noopener noreferrer">
                                <h2>GITHUB</h2>
                            </a>
                        </ProjectCardBio>
                    </ProjectCardsMain1>

                    <ProjectCardsMain2>
                        <ProjectCardsCard
                            img={GameLife}
                        />

                        <ProjectCardBio>
                            <h3>Conway's Game of Life</h3>
                            <p>
                            First created in 1970 by the British mathematician, John Horton Conway, 
                            "Conway's Game of Life" provides a platform for studying and better understanding 
                            the cellular atomaton model. The system has been widely studied throughout the years, and 
                            patterns continue to be discovered. Most notably, in 2010, Andrew J. Wade built a 
                            self-replicating structure, named Gemini, that replicates a child, which then consumes the parent.
                            </p>

                            <a href="https://michaelboegner.github.io/Conways-Life/" target="_blank" rel="noopener noreferrer">
                                <h2>WEBSITE</h2>
                            </a>

                            <a href="https://github.com/MichaelBoegner/Conways-Life/" target="_blank" rel="noopener noreferrer">
                                <h2>GITHUB</h2>
                            </a>
                        </ProjectCardBio>
                    </ProjectCardsMain2>
                    
                    <ProjectCardsMain3>
                        <ProjectCardsCard
                            img={Seinfeld}
                        />

                        <ProjectCardBio> 
                            <h3>Seinfeld Your Enthusiasm</h3>
                            <p>
                                What could possibly be better than strapping into an all nighter
                                with an old styled MUD!? Doing it with the cast of Seinfeld and Curb
                                Your Enthusiasm by your side! Beginning your quest by mysteriously 
                                waking up on Jerry's couch, you soon realize that being master of your 
                                own domain isn't all it's cracked up to be as you battle your way to La
                                La Land and back . . . all for the best bowl of soup on the face of the Earth! 
                            </p>

                            <a href="https://seinfeld-your-enthusiasm.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <h2>WEBSITE</h2>
                            </a>

                            <a href="https://github.com/MichaelBoegner/LambdaMUD-Project" target="_blank" rel="noopener noreferrer">
                                <h2>GITHUB</h2>
                            </a>
                        </ProjectCardBio>
                    </ProjectCardsMain3>
                </ProjectsBottom>
            </ProjectsMain>
            
        )
    }

}