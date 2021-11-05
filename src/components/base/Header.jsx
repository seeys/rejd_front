import React, { Component } from 'react';
import styled from 'styled-components';
import {media} from '../../lib/styleUtil';
import { Link } from 'react-router-dom';


class Header extends Component {
    render () {
        return (
            <div>
            <HeadBackground>
            <HeadWrapper>
            REJD문제풀이 사이트   
            <Spacer/>
            <Link to= 'auth/login'  style={{ textDecoration: 'none'}}>로그인/회원가입</Link>
            </HeadWrapper>     
            </HeadBackground>
            </div>
        );
    }
}


const HeadWrapper = styled.div`
    width: 1200px;
    height: 55px;
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

const HeadBackground = styled.div`
    background: #9A2EFE;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    height: auto;
    
`

const Spacer = styled.div`
    flex-grow: 1;
`;



export default Header;