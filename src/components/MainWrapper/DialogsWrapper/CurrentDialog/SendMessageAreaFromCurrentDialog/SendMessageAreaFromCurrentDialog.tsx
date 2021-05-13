import React from "react";
import style from './SendMessageAreaFromCurrentDialog.module.css'
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from "../../../../common/formsContols/FormControls";
import {requiredField} from "../../../../../utils/validators";



type SendMessageAreaFromCurrentDialogPropsType = {
    onAddPost: (self: boolean,item:string) => void
    onPostChanger: (item: string) => void

}
type PropsType = {
}
export type AddMessageFormType = {
    newMessageBody: string
    validate:any[]
}



const AddNewMessageForm:React.FC<InjectedFormProps<AddMessageFormType>> & PropsType = (props)=>{
    return (
        <form onSubmit={ props.handleSubmit }>
            {createField('enter new message here','newMessageBody',[requiredField],Textarea,{type:'text'})}
            <div className={style.button}>
                <button>send</button>
            </div>
        </form>
    )
}
const AddNewMessageFromRedux = reduxForm<AddMessageFormType> ( {form: 'profile add message form'} ) (AddNewMessageForm)

export const SendMessageAreaFromCurrentDialog:React.FC<SendMessageAreaFromCurrentDialogPropsType> = (props) =>{

    const onSubmit = (formData:AddMessageFormType)=>{
        const message = formData.newMessageBody;
        if (message) {
        message.trim()&& props.onAddPost (true,message.trim())
        }
    }

    return (
        <div className={ style.sendMessageAreaFromCurrentDialog }>
            <AddNewMessageFromRedux onSubmit={onSubmit}/>

        </div>
    )
}