import s from "./SendMessageAreaFromProfile.module.css";
import React, {ChangeEvent} from "react";
import {ActionsTypes, addPostActionCreator, changePostInputActionCreator} from "../../../../Redux/State";

type SendMessageAreaFromProfilePropsType = {
    currentInputPostString: string
    dispatch: (action: ActionsTypes) => void
}


export function SendMessageAreaFromProfile(props: SendMessageAreaFromProfilePropsType) {



    const addPost = () => {
        const trimmedPost = props.currentInputPostString.trim()
        if (trimmedPost) {
            props.dispatch(addPostActionCreator())
            props.dispatch(changePostInputActionCreator(''))
        } else {
            props.dispatch(changePostInputActionCreator(''))
        }
    } // adding trimmed post with clearing input
    const inputChanger = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changePostInputActionCreator(event.currentTarget.value))
    } //flax changer element

    return (
        <div className={s.sendMessageAreaFromProfile}>
            <textarea value={props.currentInputPostString} onChange={inputChanger}/>
            <button onClick={addPost}>send message</button>
        </div>
    )
}