import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const FooterMain=styled.div`
    display: flex; 
    justify-content: space-between;
    font-family: Lato, sans-serif;
    font-weight: 600;
    padding: 0 25%;
    border-bottom: 2px solid lightgrey;
    border-top: 2px solid lightgrey;
    background-color: #353B3E; ; 
    align-items: center;
`;



const Icon=styled.div`
    display: flex; 
    justify-content: space-around;
    padding: 2% 25%;
    margin: 25%;
    text-decoration: none;
    color: white;

    :hover {
        color: #19698F;
        cursor: pointer;
        text-decoration: none;
    }

    .fas {
        margin: 10px;
        font-size: 600%;
    }

    .fab {
        margin: 10px;
        font-size: 600%;
    }

    p {
        text-decoration: none;
        font-size: .95rem;
        display: flex;
        align-items: center;
    }
`;




export default class NavBar extends Component { 
    render() {
        return (
            <FooterMain>
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
            </FooterMain>
        )
    }

}