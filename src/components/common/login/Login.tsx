import React from 'react';
import style from './Login.module.css';
import LoginForm, {FormType} from "./loginForm/LoginForm";
import {Redirect} from "react-router-dom";
import {actionsAuth} from "../../../Redux/auth-reducer";
import {FormattedMessage} from "../FormattedMessage/FormattedMessage";


type LoginPropsType = {
    loginTC: (email: string, password: string, checkbox: boolean, captcha: null | string) => void
    isAuth: boolean
    userId: number
    captchaUrl: string | null
    error: string | null
}

const Login: React.FC<LoginPropsType> = ({isAuth, loginTC, captchaUrl, userId,error}) => {
    const onSubmit = (data: FormType) => {
        const {login, password, checkbox, captcha} = data
        loginTC ( login, password, checkbox, captcha )
    }

    const showModal = () => {
        setTimeout ( () => {
            actionsAuth.setError ( null )
        }, 2000 )
    }


    if (isAuth) return <Redirect exact to={ '/' }/> //if isAuth true redirect to profile

    return (
        <div className={ style.loginWrapper }>
            <div className={ `${style.modal} ${error && style.active}` }>{ error }</div>
            <>
                <h1 className={ style.loginH1 }><FormattedMessage _id={ 'login.title' }/></h1>
                <LoginForm captchaUrl={ captchaUrl } onSubmit={ onSubmit }/>
            </>
        </div>
    )
};

export default Login;

