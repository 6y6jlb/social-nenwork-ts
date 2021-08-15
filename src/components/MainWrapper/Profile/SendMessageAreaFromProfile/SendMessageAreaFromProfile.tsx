import style from "./SendMessageAreaFromProfile.module.css";
import React from "react";
import {requiredField} from "../../../../utils/validators";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from "../../../common/formsContols/FormControls";
import Button from "../../../common/Button/Button";
import {jsonMacros} from "../../../../utils/json-helper";

type PropsType = {
}
export type AddPostProfileFormType = {
    newPostBody: string
    validate:any[]
}
type SendMessageAreaFromProfilePropsType = {
    onAddPost: (value:string) => void
}

const AddNewPostForm:React.FC<InjectedFormProps<AddPostProfileFormType>> & PropsType = React.memo((props)=>{
    return (
        <form onSubmit={ props.handleSubmit }>
            {createField( jsonMacros('profile.post.input.placeholder'),'newPostBody',[requiredField],Textarea,{type:'text'})}
            <Button text={'add post'} />
        </form>
    )
})
const AddNewPostFromRedux = reduxForm<AddPostProfileFormType> ( {form: 'profile add message form'} ) (AddNewPostForm)

export const SendMessageAreaFromProfile = React.memo((props: SendMessageAreaFromProfilePropsType) => {

    const onSubmit = (formData:AddPostProfileFormType)=>{
        const message = formData.newPostBody;
        if (message) {
        message.trim()&&props.onAddPost (message.trim())
        }
    }

    return (
        <div className={ style.sendMessageAreaFromProfile }>
            <AddNewPostFromRedux onSubmit={onSubmit}/>
        </div>
    )
});