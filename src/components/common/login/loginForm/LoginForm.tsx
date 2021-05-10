import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../../formsContols/FormControls";
import {maxInputLength, requiredField} from "../../../../utils/validators";
import style from './LoginForm.module.css'

export type FormType = {
    login:string
    password:string
    checkbox:boolean
}
type PropsType = {}

const LoginForm:React.FC<InjectedFormProps<FormType>> & PropsType = (props)=> {
    return <form className={style.loginForm} onSubmit={props.handleSubmit}>
        {createField('login','login',[requiredField,maxInputLength(15)],Input)}
        {createField('password','password',[requiredField,maxInputLength(15)],Input, {type:'password'})}
        {createField(undefined,'rememberMe',[],Input, {type:'checkbox'},'rememberMe')}
        {props.error&&props.error}
        <div className={style.button}>
            <button>submit</button>
        </div>
    </form>
}
export default reduxForm<FormType>({form:'login'})( LoginForm);