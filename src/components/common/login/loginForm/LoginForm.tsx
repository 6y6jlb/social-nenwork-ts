import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../../formsContols/FormControls";
import {maxInputLength, requiredField} from "../../../../utils/validators";
import style from './LoginForm.module.css'

export type FormType = {
    login: string
    password: string
    checkbox: boolean
    captcha:string
}
type PropsType = {
    captchaUrl: string | null
}
//generic types for createField
export type CurrentFieldsTypes = Extract<keyof FormType, string>


//function inside component
const isMaxLengthMore20 = maxInputLength ( 20 )

const LoginForm: React.FC<InjectedFormProps<FormType, PropsType> & PropsType> = React.memo ( (props) => {
    return <form className={ `${ style.loginForm } ${ props.error && style.error }` } onSubmit={ props.handleSubmit }>
        { createField<CurrentFieldsTypes> ( 'login', 'login', [requiredField, isMaxLengthMore20], Input ) }
        { createField<CurrentFieldsTypes> ( 'password', 'password', [requiredField, isMaxLengthMore20], Input, {type: 'password'} ) }
        { createField<CurrentFieldsTypes> ( undefined, 'checkbox', [], Input, {type: 'checkbox'}, 'rememberMe' ) }
        {props.captchaUrl&& <img src={props.captchaUrl} alt="captcha"/>}
        {props.captchaUrl&& createField<CurrentFieldsTypes> ( 'text from picture', 'captcha', [], Input)}
        <div className={ style.button }>
            <button>submit</button>
        </div>
    </form>
} )
export default reduxForm<FormType, PropsType> ( {form: 'login'} ) ( LoginForm );