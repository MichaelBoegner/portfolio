import React from 'react';
import styled from 'styled-components';

const ProjectCardsMain=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50%;
    box-shadow: 2px 2px 5px;
    border: 1px solid lightslategray;

    :hover {
        cursor: pointer;
        opacity: .75;
    }
`;

const ProjectCardsImg=styled.img`
    width: 100%;
    height: 100%;
`;

const ProjectCardsGit=styled.div`

`;

const ProjectCardsSite=styled.div`

`;

export default function ProjectCards (props) {
    return (
        <ProjectCardsMain>
            <ProjectCardsImg src={props.img} alt="image of a project"></ProjectCardsImg>
            <ProjectCardsGit><a href={props.git}/></ProjectCardsGit>
            <ProjectCardsSite><a href={props.site}/></ProjectCardsSite>
        </ProjectCardsMain>
    )
}