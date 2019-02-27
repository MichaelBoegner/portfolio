import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import portfoliopic from '../../images/portfoliopic.JPG';

const HeaderMain=styled.div`
`;

const HeaderTop=styled.div`
    border-bottom: 1px solid lightgrey;
    background-color: #F4F7F9;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5% 0 2% 0;

    animation-name: projectsFadeIn;
    animation-duration: 1.5s;

    @keyframes projectsFadeIn {
        from {opacity: ${props => props.opacity ? "0" : "1"};}
        to {opacity: 1;} 
    }


    @media (max-width: 1024px) {
        padding: 8% 0 4% 0;
    }
    
    @media (max-width: 768px) {
       width: 100vw;
       padding: 4% 0;
    }
`;

const HeaderTopContent=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 5px; */
    justify-content: center;


    :hover {
        cursor: pointer;
    }

    h1 {
        font-size: 2.8rem;
        font-family: Lato, sans-serif;
        font-weight: 950;
        color: #353B3E;
        letter-spacing: 0.1rem;
    }

    h2 {
        font-size: 1.75rem;
        padding-top: 15px;
        font-family: Robato, sans-serif;
        font-weight: 100;
        color: #AAA2A2;
        justify-content: center;
    }

    h4 {
        font-size: .85rem;
        padding-top: 5px;
        font-family: Robato, sans-serif;
        font-weight: 100;
        color: #AAA2A2;
        justify-content: center;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.2rem;
        }

        h2 {
            font-size: 1.25rem;
        }

        h4 {
            font-stretch: condensed;
        }
    }
`;

const ProfileImg=styled.img`
    border: 5px solid lightgrey;
    width: 150px;
    border-radius: 100%;
`;

const ProfileImgAnimate=styled.div`
    border-radius: 100%;



    /* animation-name: ${props => props.checked ? "sunMoon" : null};
    animation-duration: 5s;
    position: relative;

    @keyframes sunMoon {
        0%   {left:0%; top:0px;}
        25%  {left:-50%; top: 150px;}
        50%  {left:0; top:50%;}
        75%  {left:0px; top:200px;}
        100% {left:0px; top:0px;}
    } */

    /* animation-name: ${props => props.checked ? "sunGlower" : null};  */
    animation-duration: 3s;
    animation-iteration-count:infinite;
    animation-direction: alternate-reverse;
    

    @keyframes sunGlower {
        0%   {
            border: 7px solid yellow;
            background-color: yellow;
            margin: 25px;
        }
        14%  {
            border: 9px solid yellow;
            background-color: yellow;
            margin: 25px;
        }
        28%  {
            border: 11px solid yellow;
            background-color: yellow;
            margin: 25px;
        }
        42%  {
            border: 13px solid yellow;
            background-color: yellow;
            margin: 25px;
        }
        56% {
            border: 11px solid yellow;
            background-color: yellow;
            margin: 25px;
        }
        70% {
            border: 9px solid yellow;
            background-color: yellow;
            margin: 25px;
        }
        84% {
            border: 7px solid yellow;
            background-color: yellow;
            margin: 25px;
        }
        100% {
            border: 9px solid yellow;
            background-color: yellow;
            margin: 25px;
        }
    } 
`;

const SunWrapper=styled.div`
    /* border: 5px solid black;
    padding: 25px;
    position: fixed;
    margin: 150px; */

`;

const NavBarLinks=styled(Link)`
    text-decoration: none;
`;


export default class Header extends Component { 
    render() { console.log("THIS.PROPS", this.props)
        return (
            <HeaderMain>
                <HeaderTop 
                    opacity={this.props.opacity}
                    checked={this.props.checked}
                    >
                    <NavBarLinks to="/">
                        <HeaderTopContent>
                            <SunWrapper>
                            <ProfileImgAnimate 
                                checked={this.props.checked}
                            >
                                <ProfileImg 
                                    src={portfoliopic} 
                                    alt="portfolio pic of Michael Boegner" 
                                    checked={this.props.checked}
                                />
                            </ProfileImgAnimate>
                            </SunWrapper>
                        </HeaderTopContent>
                        <HeaderTopContent>
                            <h1>C. Michael Boegner</h1>
                            <h2>Software Engineer & Problem Solver</h2>
                            <h4>React | JavaScript | Python | C | MySQL | Node | HTML | CSS</h4>
                        </HeaderTopContent>
                    </NavBarLinks>
                </HeaderTop>
            </HeaderMain>
        )
    }

}