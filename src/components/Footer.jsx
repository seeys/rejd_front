import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
    render () {
        return (
            <div>
                <Foot>footer</Foot>
            </div>
        );
    }
}

const Foot = styled.div`
    display: fixed;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 100%;
    top: 0px;
    z-index: 5;
    font-size: 2.5rem;
    background-color: orange;
`
export default Footer;