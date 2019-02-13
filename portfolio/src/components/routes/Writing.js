import React, { Component } from 'react';
import ProjectCards from '../projects/ProjectCards';
import Footer from '../statics/Footer';
import styled from 'styled-components';
import FamilyTabs from '../../images/FamilyTabs.JPG';


const WritingMain=styled.div`
`;

const WritingBottom=styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    animation-name: writingFadeIn;
    animation-duration: 1.5s;

    @keyframes writingFadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
    }
`;

const WritingCardsMain1=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: top;
    padding: 3% 20%;
    border-bottom: 1px solid lightgrey;
`;

const WritingCardsCard=styled(ProjectCards)`

`;

const WritingCardBio=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 25px; 
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
            <WritingMain>
                <WritingBottom>

                    <WritingCardsMain1>
                        <WritingCardsCard
                            img={FamilyTabs}
                        />

                        <WritingCardBio> 
                            <h3>Medium Article</h3>
                            <p>
                                This is filler. A happy-time Medium article to follow soon!
                            </p>
                        </WritingCardBio>
                    </WritingCardsMain1>

                </WritingBottom>
                
                <Footer/>
            </WritingMain>
            
        )
    }

}