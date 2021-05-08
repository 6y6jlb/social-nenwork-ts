import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormType = {
    login:string
    password:string
    checkbox:boolean
}
type PropsType = {}

const LoginForm:React.FC<InjectedFormProps<FormType>> & PropsType = (props)=> {
    return <form onSubmit={props.handleSubmit}>
        <div><Field type="text" name={ 'login' } placeholder={ 'Login' } component={ 'input' }/></div>
        <div><Field type="text" name={ 'password' } placeholder={ 'Password' } component={ 'input' }/></div>
        <div><Field type="checkbox" name={ 'checkbox' } component={ 'input' }/></div>
        <div>
            <button>submit</button>
        </div>
    </form>
}
export default reduxForm<FormType>({form:'login'})( LoginForm);