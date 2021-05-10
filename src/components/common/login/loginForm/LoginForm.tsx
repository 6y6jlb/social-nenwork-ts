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
//generic types for createField
type CurrentFieldsTypes = Extract <keyof  FormType, string>

type PropsType = {}

//function inside component
const isMaxLengthMore20 = maxInputLength(20)

const LoginForm:React.FC<InjectedFormProps<FormType>> & PropsType = (props)=> {
    return <form className={ `${style.loginForm} ${props.error && style.error}`} onSubmit={props.handleSubmit}>
        {createField<CurrentFieldsTypes>('login','login',[requiredField,isMaxLengthMore20],Input)}
        {createField<CurrentFieldsTypes>('password','password',[requiredField,isMaxLengthMore20],Input, {type:'password'})}
        {createField<CurrentFieldsTypes>(undefined,'checkbox',[],Input, {type:'checkbox'},'rememberMe')}

        <div className={style.button}>
            <button>submit</button>
        </div>
    </form>
}
export default reduxForm<FormType>({form:'login'})( LoginForm);