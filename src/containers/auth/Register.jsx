import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError } from '../../components/auth';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../redux/modules/auth';
import {isEmail, isLength, isAlphanumeric} from 'validator';

class Register extends Component {

    componentWillUnmount() {
        const { AuthActions } = this.props;
        AuthActions.initializeForm('register')
    }

    setError = (message) => {
        const { AuthActions } = this.props;
        AuthActions.setError({
            form: 'register',
            message
        });
    }

    validate = {
        id: (value) => {
            if(!isAlphanumeric(value) || !isLength(value, { min:4, max: 15 })) {
                this.setError('아이디는 4~15 글자의 알파벳 혹은 숫자로 이뤄져야 합니다.');
                return false;
            }
            this.setError(null);
            return true;
        },
        email: (value) => {
            if(!isEmail(value)) {
                this.setError('잘못된 이메일 형식 입니다.');
                return false;
            }
            this.setError(null);
            return true;
        },
        password: (value) => {
            if(!isLength(value, { min: 6 })) {
                this.setError('비밀번호를 6자 이상 입력하세요.');
                return false;
            }
            this.setError(null);
            return true;
        },
        passwordConfirm: (value) => {
            if(this.props.form.get('password') !== value) {
                this.setError('비밀번호확인이 일치하지 않습니다.');
                return false;
            }
            this.setError(null); 
            return true;
        }
    }

    handleChange = (e) => {
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            name,
            value,
            form: 'register'
        });

        const validation = this.validate[name](value);
        if(name.indexOf('password') > -1 || !validation) return;
    }

    handleLocalRegister = async () => {
        const { form, AuthActions, error, history } = this.props;
        const { id, password, passwordConfirm, email } = form.toJS();
    
        const { validate } = this;
        if(error) return;
        if(!validate['id'](id)
        || !validate['password'](password)
        || !validate['passwordConfirm'](passwordConfirm)
        || !validate['email'](email)){
          return;
        }
    
        try {
          await AuthActions.localRegister({
            id, password, email
          });
          const loggedInfo = this.props.result.toJS();
    
          //storage.set('loggedInfo',loggedInfo);
          //userActions.setLoggedInfo(loggedInfo);
          //userActions.setValidated(true);
          console.log(loggedInfo);
          history.push('/user/login');
        } catch(e) {
          console.log(e);
          this.setError('알 수 없는 에러가 발생했습니다.')
        }
      }

    render() {
        const { id, email, password, passwordConfirm } = this.props.form.toJS();
        const { handleChange, handleLocalRegister } = this;
        const { error } = this.props;

        return (
            <AuthContent title="회원가입">
                <InputWithLabel label="아이디" name="id" value={id} onChange={handleChange} placeholder="아이디"/>
                <InputWithLabel label="이메일" name="email" value={email} onChange={handleChange} placeholder="이메일"/>
                <InputWithLabel label="비밀번호" name="password" value={password} onChange={handleChange} placeholder="비밀번호" type="password"/>
                <InputWithLabel label="비밀번호 확인" name="passwordConfirm" value={passwordConfirm} onChange={handleChange} placeholder="비밀번호 확인" type="password"/>
                {
                    error && <AuthError>{error}</AuthError>
                }
                <AuthButton onClick={handleLocalRegister}>회원가입</AuthButton>
                <RightAlignedLink to="/auth/login">로그인</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['register', 'form']),
        error: state.auth.getIn(['register', 'error']),
        result: state.auth.get('result')
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(Register);