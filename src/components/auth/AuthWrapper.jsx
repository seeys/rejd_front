import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../lib/styleUtil';
import { Link } from 'react-router-dom';

const AuthWrapper = ({children}) => (
    <Positioner>
        <ShadowedBox>
            <LogoWrapper>
                <Logo to="/">Login</Logo>
            </LogoWrapper>
            <Contents>
                {children}
            </Contents>
        </ShadowedBox>
    </Positioner>
);

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ShadowedBox = styled.div`
    width: 500px;
    ${shadow(2)}
`;

const LogoWrapper = styled.div`
    background: white;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled(Link)`
    color: black;
    font-family: 'Rajdhani';
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
`;

const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
`;

export default AuthWrapper;