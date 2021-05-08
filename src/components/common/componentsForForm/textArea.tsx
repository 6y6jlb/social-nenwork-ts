import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import style from './textArea.module.css';


type PropsType = {}

export type AddMessageProfileFormType = {
    newMessageBody: string
}
const TextArea: React.FC<InjectedFormProps<AddMessageProfileFormType>> & PropsType = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div className={style.textArea}>
                <Field component={ 'textarea' } name={ 'newMessageBody' } placeholder={ 'enter text here' }/>
            </div>
            <div className={style.button}>
                <button>send</button>
            </div>
        </form>
    )
}
export default reduxForm<AddMessageProfileFormType> ( {form: 'profile add message form'} ) ( TextArea );