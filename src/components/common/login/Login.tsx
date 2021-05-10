import React from 'react';
import style from './Login.module.css';
import LoginForm, {FormType} from "./loginForm/LoginForm";



type LoginPropsType = {
    loginTC: (email:string,password:string, checkbox:boolean)=>void
}

const Login = (props:LoginPropsType) => {
    const onSubmit = (data: FormType) => {
        const {login,password,checkbox} = data
        props.loginTC(login,password,checkbox)
    }
    return <div className={ style.loginWrapper }>
        <h1 className={ style.loginH1 }>login</h1>
        <LoginForm onSubmit={ onSubmit }/>
    </div>
};

export default Login;

