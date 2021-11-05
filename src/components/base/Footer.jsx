import React, { Component } from 'react';
import styled from 'styled-components';
import {media} from '../../lib/styleUtil';


class Footer extends Component {
    render () {
        return (
            <div>
                <Background>
                <FootWrapper>
                <Spacer/>
                Rejd 문규진,민정,성호,세은,치영
                <Spacer/>
                </FootWrapper>
                </Background>
            </div>
        );
    }
}

const FootWrapper = styled.div`
    width: 1200px;
    height: 100px;
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

const Background = styled.div`
    background: #9A2EFE;
    font-color: #FFFFFF;
    display: flex;
    justify-content: center;
    height: auto;
`
const Spacer = styled.div`
    flex-grow: 1;
`;

export default Footer;