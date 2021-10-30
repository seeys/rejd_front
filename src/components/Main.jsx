import React, { Component } from 'react';
import styled from 'styled-components';

class Main extends Component {
    render () {
        return (
            <Maincontainer>Mainpage</Maincontainer>
        );
    }
}

const Maincontainer = styled.div`
    display: fixed;
    align-items: center;
    justify-content: center;
    height: 700px;
    width: 100%;
    top: 0px;
    z-index: 5;
    font-size: 2.5rem;
    background-color: yellow;
`

export default Main;