import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function(props) {
    return (
        <Header>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/smurf-form">Add Smurf</NavLink>
        </Header>
    )
}

const Header = styled.div`
    width: 100%;
    height: 45px;
    background: lightblue;

    margin-bottom: 2rem;

    display: flex;
    justify-content: center;


    a {
        display: inline-flex;
        align-items: center;

        height: 100%;
        padding: 0 1rem;

        text-decoration: none;
        color: inherit;

        &.active {
            color: white;
            background: black;
        }
    }
`