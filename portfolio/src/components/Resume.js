import React, { Component } from 'react';
import Header from './Header';
import ProjectCards from './ProjectCards';
import Footer from './Footer';
import styled from 'styled-components';
import Resume from '../images/Resume.PNG';


const ResumeMain=styled.div`
`;

const ResumeBottom=styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    animation-name: resumeFadeIn;
    animation-duration: 1.5s;

    @keyframes resumeFadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
    }
`;

const ResumeCardsMain1=styled.div`
    display: flex;
    justify-content: center;
    padding: 3% 20%;
    border-bottom: 1px solid lightgrey;
`;

const ResumeCardsCard=styled(ProjectCards)`

`;


export default class Projects extends Component { 
    constructor(){
        super();
    }

    render() {
        return (
            <ResumeMain>

                <Header/>

                <ResumeBottom>

                    <ResumeCardsMain1>
                        <ResumeCardsCard
                            img={Resume}
                        />
                    </ResumeCardsMain1>

                </ResumeBottom>
                
                <Footer/>
            </ResumeMain>
            
        )
    }

}