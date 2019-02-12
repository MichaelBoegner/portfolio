import React from 'react';
import styled from 'styled-components';

const ProjectCardsMain=styled.div`
    border: 3px solid orange;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 33%; 
    margin: 0 25px;
`;

const ProjectCardsImg=styled.img`
    height: 80%;
    width: 80%; 

`;

const ProjectCardsTitle=styled.div`

`;

const ProjectCardsBody=styled.div`

`;

export default function ProjectCards (props) {
    return (
        <ProjectCardsMain>
            <ProjectCardsImg src={props.img} alt="image of a project"/>
            <ProjectCardsTitle>{props.title}</ProjectCardsTitle>
            <ProjectCardsBody>{props.body}</ProjectCardsBody>
        </ProjectCardsMain>
    )
}