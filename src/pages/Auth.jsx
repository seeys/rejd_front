import React, { Component } from 'react';
import { AuthWrapper } from '../components/auth';
import styled from 'styled-components';
import oc from 'open-color';
import { Route } from 'react-router';
import Login from 'containers/auth/Login';
import Register from 'containers/auth/Register';

// 로그인, 회원가입 컴포넌트 라우트 설정할곳
class Auth extends Component {

    render () {
        return (
            <BackColor>
                <AuthWrapper>
                    <Route path="/auth/login" component={Login}/>
                    <Route path="/auth/register" component={Register}/>
                </AuthWrapper>
            </BackColor>
        );
    }
}

const BackColor = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${oc.violet[6]};
`;

export default Auth;