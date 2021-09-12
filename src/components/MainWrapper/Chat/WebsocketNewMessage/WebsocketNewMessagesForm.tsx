import * as React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../Chat.module.css";
import {createField, Textarea} from "../../../common/formsContols/FormControls";
import {requiredField} from "../../../../utils/validators";
import Button from "../../../common/Button/Button";


type PropsType = {
    disabled: boolean
}
export type WebsocketMessagesFormType = {
    newMessageBody: string
    validate: any[]
}
const Form: React.NamedExoticComponent<InjectedFormProps<WebsocketMessagesFormType, PropsType> & PropsType> = React.memo ( (props) => {
    const {handleSubmit, disabled} = props;
    return (
        <form className={ style.form } onSubmit={ handleSubmit }>
            { createField ( 'enter new message here', 'newMessageBody', [requiredField], Textarea, {type: 'text'} ) }
            <Button disabled={ disabled } text={ 'send message' }/>
        </form>
    );
} );
export const WebsocketNewMessagesForm = reduxForm<WebsocketMessagesFormType, PropsType> ( {form: 'websocketPostMessageForm'} ) ( Form );