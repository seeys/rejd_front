import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink } from '../../components/auth';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../redux/modules/auth';

class Register extends Component {

    componentWillUnmount() {
        const { AuthActions } = this.props;
        AuthActions.initializeForm('register')
    }

    handleChange = (e) => {
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            name,
            value,
            form: 'register'
        });
    }

    render() {
        const { email, id, password, passwordConfirm } = this.props.form.toJS();
        const { handleChange } = this;

        return (
            <AuthContent title="회원가입">
                <InputWithLabel label="이메일" name="email" value={email} onChange={handleChange} placeholder="이메일"/>
                <InputWithLabel label="아이디" name="id" value={id} onChange={handleChange} placeholder="아이디"/>
                <InputWithLabel label="비밀번호" name="password" value={password} onChange={handleChange} placeholder="비밀번호" type="password"/>
                <InputWithLabel label="비밀번호 확인" name="passwordConfirm" value={passwordConfirm} onChange={handleChange} placeholder="비밀번호 확인" type="password"/>
                <AuthButton>회원가입</AuthButton>
                <RightAlignedLink to="/auth/login">로그인</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['register', 'form'])
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(Register);