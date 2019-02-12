import React from 'react';
import styled from 'styled-components';

const ProjectCardsMain=styled.div`
    height: 450px;
    width: 450px; 
`;

const ProjectCardsTitle=styled.div`

`;

const ProjectCardsBody=styled.div`

`;

export default function ProjectCards () {
    return (
        <ProjectCardsMain>
            <img src={this.props.img} alt="image of a project"/>
            <ProjectCardsTitle>{this.props.title}</ProjectCardsTitle>
            <ProjectCardsBody>{this.props.body}</ProjectCardsBody>
        </ProjectCardsMain>
    )
}