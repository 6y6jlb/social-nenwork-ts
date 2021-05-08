import s from "./SendMessageAreaFromProfile.module.css";
import React, {ChangeEvent, KeyboardEvent} from "react";
import TextArea, {AddMessageProfileFormType} from "../../../common/componentsForForm/textArea";

type SendMessageAreaFromProfilePropsType = {
    currentInputPost: string
    onAddPost: (value:string) => void
    onPostChanger: (text: string) => void
}


export function SendMessageAreaFromProfile(props: SendMessageAreaFromProfilePropsType) {


/*    const onAddPost = () => {
        if (props.currentInputPost.trim()) {
            props.onAddPost ()
            props.onPostChanger ( '' )
        }
    } // adding trimmed post with clearing input   //old logic with dispatch inside


    const onPostChanger = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value
        props.onPostChanger ( text )
    } //flax changer element //old logic with dispatch inside

    const onKeyPress = (event:KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && event.shiftKey) {
            onAddPost ()
        }
    }*/
    const onSubmit = (formData:AddMessageProfileFormType)=>{
        const message = formData.newMessageBody.trim();
        if (message) {
            props.onAddPost (message)
        }
    }

    return (
        <div className={ s.sendMessageAreaFromProfile }>
           {/* <textarea value={ props.currentInputPost } onChange={ onPostChanger } onKeyPress={onKeyPress}/>
            <button onClick={ onAddPost }>send message</button>*/}
            <TextArea onSubmit={onSubmit}/>
        </div>
    )
}