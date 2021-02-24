import s from "./SendMessageAreaFromProfile.module.css";
import React, { ChangeEvent } from "react";

type SendMessageAreaFromProfilePropsType = {
    currentInputPostString: string
    addPostFromProfile: (value: string) => void
    textAreaFromPostChanger: (item: string) => void
}

export function SendMessageAreaFromProfile(props: SendMessageAreaFromProfilePropsType) {


    const addPost = () => {
        const trimmedPost = props.currentInputPostString.trim()
        if (trimmedPost) {
            props.addPostFromProfile(trimmedPost)
            props.textAreaFromPostChanger('')
        } else {
            props.textAreaFromPostChanger('')
        }
    } // adding trimmed post with clearing input
    const inputChanger = (event:ChangeEvent<HTMLTextAreaElement>) => {
            props.textAreaFromPostChanger(event.currentTarget.value)
        } //flax changer element

    return (
        <div className={s.sendMessageAreaFromProfile}>
            <textarea value={props.currentInputPostString} onChange={inputChanger}/>
            <button onClick={addPost}>send message</button>
        </div>
    )
}