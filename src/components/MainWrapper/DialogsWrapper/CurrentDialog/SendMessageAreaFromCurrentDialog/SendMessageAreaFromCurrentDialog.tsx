import React, {ChangeEvent} from "react";
import s from './SendMessageAreaFromCurrentDialog.module.css'
import {ActionsTypes} from "../../../../../Redux/State";

type SendMessageAreaFromCurrentDialogPropsType = {
    currentInputMessageString: string
    dispatch: (action: ActionsTypes) => void
}

export function SendMessageAreaFromCurrentDialog(props: SendMessageAreaFromCurrentDialogPropsType) {


    const addPost = () => {
        const trimmedMessage = props.currentInputMessageString.trim()
        if (trimmedMessage) {
            props.dispatch({type: 'ADD-DIALOGS-MESSAGE', self: true})
            props.dispatch({type: 'CHANGE-DIALOGS-INPUT-TEXT', item: ''})
        } else {
            props.dispatch({type: 'CHANGE-DIALOGS-INPUT-TEXT', item: ''})
        }
    } // adding trimmed post with clearing input
    const inputChanger = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(props.currentInputMessageString)
        props.dispatch({type: "CHANGE-DIALOGS-INPUT-TEXT", item: event.currentTarget.value})
    } //flax changer element

    return (
        <div className={s.sendMessageAreaFromCurrentDialog}>
            <textarea className={s.textArea} onChange={inputChanger}
                      value={props.currentInputMessageString}/>

            <button onClick={addPost}>send message</button>

        </div>
    )
}