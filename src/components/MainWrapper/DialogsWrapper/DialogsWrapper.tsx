import React from "react";
import {CurrentDialog} from "./CurrentDialog/CurrentDialog";
import {FriendListFromDialogs} from "./FriendListFromDialogs/FriendListFromDialogs";
import s from './DialogsWrapper.module.css'
import {MessagesFromDialogsType} from "../../../Redux/State";


export type DialogsWrapperPropsType = {
    addMessageFromDialogs: (value:string,self:boolean)=>void
    messages: Array<MessagesFromDialogsType>
    textAreaFromDialogsChanger:(item:string)=>void
    currentInputMessageString:string

}

export function DialogsWrapper(props:DialogsWrapperPropsType) {
    const messages = props.messages
    return (
        <div className={s.dialogsWrapper}>
            <FriendListFromDialogs/>
            <CurrentDialog textAreaFromDialogsChanger={props.textAreaFromDialogsChanger}
                           addMessageFromDialogs={props.addMessageFromDialogs}
                           currentInputMessageString={props.currentInputMessageString}
                           messages={messages}/>
        </div>
    )
}
