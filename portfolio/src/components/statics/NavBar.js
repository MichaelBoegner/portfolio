import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Switch from "react-switch";
import styled from "styled-components";

const NavBarMain=styled.div`
    display: flex; 
    justify-content: space-between;
    font-family: Lato, sans-serif;
    font-weight: 600;
    border-bottom: 2px solid lightgrey;
    border-top: 2px solid lightgrey;
    background-color: #353B3E; 
    align-items: center;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100vw; 
    }
`;

const NavBarLeft=styled.div`
    min-height: 100%;
`;

const NavBarCenter=styled.div`
    padding: 0 0 0 5%;
    color: white;
    
    label {
        display: flex;
        align-items: center;
    }
    span {
        padding: 5%;
        font-size: .75rem;
        letter-spacing: 0.20rem;
    }
`;

const NavBarRight=styled.div`
    display: flex; 
    justify-content: space-between;
    align-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const NavBarLinks=styled(Link)`
    text-decoration: none;
    color: white;
    font-size: .8rem;
    letter-spacing: 0.25rem;
    padding: 15px 25px;


    :hover {
        background-color: lightgray;
        cursor: pointer;

        animation-name: rainbowHover;
        animation-duration: 1.25s; 
        animation-iteration-count:infinite;
        animation-direction: alternate-reverse;

        @keyframes rainbowHover {
            0% {color: lightgrey;}
            100% {color: #353B3E;}
        }
    }

    @media (max-width: 768px) {
        border-bottom: 2px solid lightgrey;
        padding: 5% 0;
        margin: 0 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;

        :hover {
            animation-name: none;
            color: #353B3E;
        }
    }
`;

const NavBarTitle=styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.15rem;
    letter-spacing: 0.20rem;
    padding: 10px 25px;

    :hover {
        background-color: lightgray;
        cursor: pointer;

        animation-name: rainbowHover;
        animation-duration: 1.25s; 
        animation-iteration-count:infinite;
        animation-direction: alternate-reverse;

        @keyframes rainbowHover {
            0% {color: lightgrey;}
            100% {color: #353B3E;}
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;





export default class NavBar extends Component { 
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }
    
    
    handleChange(checked) {
        this.setState({ checked });
    }
    
    render() {
        return (
            <NavBarMain>
                <NavBarLeft>
                    <NavBarTitle to="/">C. MICHAEL BOEGNER</NavBarTitle>
                </NavBarLeft>

                <NavBarRight>
                    <NavBarLinks to="/projects">
                        PROJECTS
                    </NavBarLinks>
                    
                    <NavBarLinks to="/writing">
                        WRITING
                    </NavBarLinks>
                    
                    <NavBarLinks to="/contact">
                        CONTACT
                    </NavBarLinks>
                </NavBarRight>
            </NavBarMain>
        )


        // console.log("THIS.STATE",this.state)
        // return (
        //     <NavBarMain>
        //         <NavBarLeft>
        //             <NavBarTitle to="/">C. MICHAEL BOEGNER</NavBarTitle>
        //         </NavBarLeft>

        //         <NavBarCenter>
        //         <label htmlFor="normal-switch">
        //             <span>SERIOUS</span>
                   
        //             <Switch
        //             onChange={this.handleChange}
        //             checked={this.state.checked}
        //             id="normal-switch"
        //             uncheckedIcon={false}
        //             checkedIcon={false}
        //             height={18}
        //             width={28}
        //             />

        //             <span>ZANY</span>
        //         </label>
        //         </NavBarCenter>

        //         <NavBarRight>
        //             <NavBarLinks to="/projects">
        //                 PROJECTS
        //             </NavBarLinks>
                    
        //             <NavBarLinks to="/writing">
        //                 WRITING
        //             </NavBarLinks>
                    
        //             <NavBarLinks to="/contact">
        //                 CONTACT
        //             </NavBarLinks>
        //         </NavBarRight>
        //     </NavBarMain>
        // )
    }

}