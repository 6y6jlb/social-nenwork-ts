import React from "react";
import {CurrentDialog} from "./CurrentDialog/CurrentDialog";
import {FriendListFromDialogs} from "./FriendListFromDialogs/FriendListFromDialogs";
import s from './DialogsWrapper.module.css'
import {ActionsTypes, MessagesFromDialogsType} from "../../../Redux/State";


export type DialogsWrapperPropsType = {
    dispatch: (action:ActionsTypes)=>void
    messages: Array<MessagesFromDialogsType>
    currentInputMessageString:string

}

export function DialogsWrapper(props:DialogsWrapperPropsType) {
    const messages = props.messages
    return (
        <div className={s.dialogsWrapper}>
            <FriendListFromDialogs/>
            <CurrentDialog dispatch={props.dispatch}
                           currentInputMessageString={props.currentInputMessageString}
                           messages={messages}/>
        </div>
    )
}
