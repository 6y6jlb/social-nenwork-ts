import s from "./SendMessageAreaFromProfile.module.css";
import React, {ChangeEvent} from "react";
import {ActionsTypes} from "../../../../Redux/State";

type SendMessageAreaFromProfilePropsType = {
    currentInputPostString: string
    dispatch: (action: ActionsTypes) => void
}

export function SendMessageAreaFromProfile(props: SendMessageAreaFromProfilePropsType) {


    const addPost = () => {
        const trimmedPost = props.currentInputPostString.trim()
        if (trimmedPost) {
            props.dispatch({type: "ADD-POST"})
            props.dispatch({type: "CHANGE-POST-INPUT-TEXT", item: ''})
        } else {
            props.dispatch({type: "CHANGE-POST-INPUT-TEXT", item: ''})
        }
    } // adding trimmed post with clearing input
    const inputChanger = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "CHANGE-POST-INPUT-TEXT", item: event.currentTarget.value})
    } //flax changer element

    return (
        <div className={s.sendMessageAreaFromProfile}>
            <textarea value={props.currentInputPostString} onChange={inputChanger}/>
            <button onClick={addPost}>send message</button>
        </div>
    )
}