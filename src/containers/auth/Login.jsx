import React, { Component } from 'react';
import { AuthButton, AuthContent, InputWithLabel, RightAlignedLink } from '../../components/auth';

class Login extends Component {
    render() {
        return (
            <AuthContent title="로그인">
                <InputWithLabel label="아이디" name="id" placeholder="username"/>
                <InputWithLabel label="비밀번호" name="password" placeholder="password"/>
                <AuthButton>로그인</AuthButton>
                <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default Login;