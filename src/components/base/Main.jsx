import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../../lib/styleUtil';

class Main extends Component {
    render () {
        return (
            <MainBackground>
            <MainWrapper>
                <Container>문제들</Container>
                <Container>클라이언트 전형</Container>
                <Container>서버전형</Container>
            </MainWrapper>
            </MainBackground>
        );
    }
}

const MainWrapper = styled.div`
    width: 1200px;
    height: 1000px;
    font-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
    ${media.wide`
        width: 992px;
    `}

    ${media.tablet`
        width: 100%;
    `}
`

const MainBackground = styled.div`
    background:  #FFFFFF;
    display: flex;
    justify-content: center;
    height: auto;
`

const Spacer = styled.div`
    flex-grow: 1;
`;

const Container = styled.div`
    width: 1200px;
    height:150px;
    display:felx;
    flex-direction: row;
    align-items: center;
    background: black;
    color:#FFFFFF;
    justify-content:space-between;

`

export default Main;