import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
    render () {
        return (
            <div>
                <Head>header</Head>
            </div>
        );
    }
}

const Head = styled.div`
    display: fixed;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
    top: 0px;
    z-index: 5;
    font-size: 2.5rem;
    background-color: blue;
`

export default Header;