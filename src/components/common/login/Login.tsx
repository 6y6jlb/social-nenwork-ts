import React, {useState} from 'react';
import style from './Login.module.css';
import LoginForm, {FormType} from "./loginForm/LoginForm";
import {Redirect} from "react-router-dom";
import {actionsAuth} from "../../../Redux/auth-reducer";


type LoginPropsType = {
    loginTC: (email: string, password: string, checkbox: boolean, captcha: null | string) => void
    isAuth: boolean
    userId: number
    captchaUrl: string | null
    error: string | null
}

const Login: React.FC<LoginPropsType> = ({isAuth, loginTC, captchaUrl, userId, error}) => {
    const [isErrorModal, setErrorModal] = useState ( false )
    const onSubmit = (data: FormType) => {
        const {login, password, checkbox, captcha} = data
        loginTC ( login, password, checkbox, captcha )
    }

    const showModal = () => {
        setTimeout ( () => {
            actionsAuth.setError ( null )
            setErrorModal(false)
        }, 2000 )
    }
    if (error) {
        showModal()
    }

    if (isAuth) return <Redirect exact to={ '/' }/> //if isAuth true redirect to profile

    return <div className={ style.loginWrapper }>
        <h1 className={ style.loginH1 }>login</h1>
        <LoginForm captchaUrl={ captchaUrl } onSubmit={ onSubmit }/>
        { isErrorModal && <div className={ style.modal }>{ error }</div> }
    </div>
};

export default Login;

