import React from 'react';
import styled from 'styled-components';

const ProjectCardsMain=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 33%; 
    margin: 0 25px;
    box-shadow: 5px 5px 5px;
    border: 1px solid lightslategray;
    :hover {
        cursor: pointer;
        opacity: .25;
    }
`;

const ProjectCardsImg=styled.img`
    height: 100%;
    width: 100%; 
    z-index: -1;

`;

const ProjectCardsTitle=styled.div`
    position: fixed;
`;

const ProjectCardsBody=styled.div`
    position: fixed;
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