import React from 'react';
import style from './Login.module.css';
import LoginForm, {FormType} from "./loginForm/LoginForm";
import {Redirect} from "react-router-dom";


type LoginPropsType = {
    loginTC: (email: string, password: string, checkbox: boolean,captcha: null|string) => void
    isAuth: boolean
    captchaUrl: string|null
}

const Login: React.FC<LoginPropsType> = ({isAuth, loginTC,captchaUrl}) => {
    const onSubmit = (data: FormType) => {
        const {login, password, checkbox,captcha} = data
        loginTC ( login, password, checkbox,captcha)
    }

    if (isAuth) return <Redirect exact to={ '/' }/> //if isAuth true redirect to profile

    return <div className={ style.loginWrapper }>
        <h1 className={ style.loginH1 }>login</h1>
        <LoginForm captchaUrl={captchaUrl} onSubmit={ onSubmit }/>
    </div>
};

export default Login;

