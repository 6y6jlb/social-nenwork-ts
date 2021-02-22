import React from "react";
import {CurrentDialog} from "./CurrentDialog/CurrentDialog";
import {FriendListFromDialogs} from "./FriendListFromDialogs/FriendListFromDialogs";
import s from './DialogsWrapper.module.css'
import {MessagesFromDialogsType} from "../../../Redux/State";


export type DialogsWrapperPropsType = {
    addMessageFromDialogs: (message:string, enemy:boolean)=>void
    messages: Array<MessagesFromDialogsType>

}

export function DialogsWrapper(props:DialogsWrapperPropsType) {
    const messages = props.messages
    return (
        <div className={s.dialogsWrapper}>
            <FriendListFromDialogs/>
            <CurrentDialog addMessageFromDialogs={props.addMessageFromDialogs}  messages={messages}/>
        </div>
    )
}
