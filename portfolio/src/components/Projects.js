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
    height: 450px;
    border: 3px solid purple;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    padding: 15px 250px;
    animation-name: fadeIn;
    animation-duration: 3s;

    @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
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
                    <ProjectCards
                        title="Family Tabs"
                        body="test"
                        img={FamilyTabs}
                    />

                    <ProjectCards
                        title="Curb Your Seinfeld"
                        body="test"
                        img={Seinfeld}
                    />

                    <ProjectCards
                        title="Conway's Game of Life"
                        body="test"
                        img={GameLife}
                    />
                </ProjectsBottom>
            </ProjectsMain>
            
        )
    }

}