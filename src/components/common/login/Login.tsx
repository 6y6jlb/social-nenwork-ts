import React from 'react';
import style from './Login.module.css';
import LoginForm, {FormType} from "./loginForm/LoginFrom";
import {AuthAPI} from "../../../api/api";
import {Redirect} from "react-router-dom";

type LoginPropsType = {
    setUserTC: (userID:number)=>void
}

const Login = (props:LoginPropsType) => {
    const onSubmit = (data: FormType) => {
        const {login,password,checkbox} =data
        AuthAPI.login(login, password,checkbox)
            .then((response)=>{
                props.setUserTC(response.data.userId)
            }).then(()=>{
                return <Redirect to={'/profile'}/> //хз, погуглить
            }
        )
    }
    return <div className={ style.loginWrapper }><h1 className={ style.loginH1 }>login</h1>
        <LoginForm onSubmit={ onSubmit }/>
    </div>
};

export default Login;

