import React, { Component } from 'react';
import Header from './Header';
import ProjectCards from './ProjectCards';
import Footer from './Footer';
import styled from 'styled-components';
import FamilyTabs from '../images/FamilyTabs.JPG';


const ContactMain=styled.div`
`;

const ContactBottom=styled.div`
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

const ContactCardsMain1=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: top;
    padding: 3% 20%;
    border-bottom: 1px solid lightgrey;
`;

const ContactCardsMain2=styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: top;
    padding: 3% 20%;
    border-bottom: 1px solid lightgrey;
`;

const ContactCardsMain3=styled.div`
    display: flex;
    align-items: top;
    padding: 3% 20%;
`;

const ContactCardsCard=styled(ProjectCards)`

`;

const ContactCardBio=styled.div`
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
            <ContactMain>

                <Header/>

                <ContactBottom>

                    <ContactCardsMain1>
                        <ContactCardsCard
                            img={FamilyTabs}
                        />

                        <ContactCardBio> 
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
                        </ContactCardBio>
                    </ContactCardsMain1>

                </ContactBottom>
                
                <Footer/>
            </ContactMain>
            
        )
    }

}