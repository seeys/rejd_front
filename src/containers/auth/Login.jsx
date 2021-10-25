import React, { Component } from 'react';
import { AuthButton, AuthContent, InputWithLabel, RightAlignedLink } from '../../components/auth';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../redux/modules/auth';

class Login extends Component {

    componentWillUnmount() {
        const { AuthActions } = this.props;
        AuthActions.initializeForm('login')
    }

    handleChange = (e) => {
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            name,
            value,
            form: 'login'
        });
    }

    render() {
        const { id, password } = this.props.form.toJS();
        const { handleChange } = this;
        return (
            <AuthContent title="로그인">
                <InputWithLabel label="아이디" name="id" value={id} onChange={handleChange} placeholder="id"/>
                <InputWithLabel label="비밀번호" name="password" value={password} onChange={handleChange} placeholder="password"/>
                <AuthButton>로그인</AuthButton>
                <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['login', 'form'])
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(Login);