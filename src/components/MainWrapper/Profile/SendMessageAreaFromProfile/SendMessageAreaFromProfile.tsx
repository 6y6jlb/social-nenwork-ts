import s from "./SendMessageAreaFromProfile.module.css";
import React, {ChangeEvent} from "react";

type SendMessageAreaFromProfilePropsType = {
    currentInputPost: string
    onAddPost: () => void
    onPostChanger: (text: string) => void
    /* dispatch: (action: ActionsTypes) => void*/
}


export function SendMessageAreaFromProfile(props: SendMessageAreaFromProfilePropsType) {


    const onAddPost = () => {
        props.onAddPost()
        /* const trimmedPost = props.currentInputPostString.trim()
         if (trimmedPost) {
             props.dispatch(addPostActionCreator())
             props.dispatch(changePostInputActionCreator(''))
         } else {
             props.dispatch(changePostInputActionCreator(''))
         }*/
    } // adding trimmed post with clearing input
    const onPostChanger = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value
        props.onPostChanger(text)
        /*props.dispatch(changePostInputActionCreator(event.currentTarget.value))*/
    } //flax changer element

    return (
        <div className={s.sendMessageAreaFromProfile}>
            <textarea value={props.currentInputPost} onChange={onPostChanger}/>
            <button onClick={onAddPost}>send message</button>
        </div>
    )
}