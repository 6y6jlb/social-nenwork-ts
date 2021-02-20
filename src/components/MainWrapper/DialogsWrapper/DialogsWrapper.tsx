import React from "react";
import {CurrentDialog} from "./CurrentDialog/CurrentDialog";
import {FriendListFromDialogs} from "./FriendListFromDialogs/FriendListFromDialogs";
import s from './DialogsWrapper.module.css'
import {DialogWrapperObjType} from "../../../index";

export function DialogsWrapper(props: DialogWrapperObjType) {
    const messages = props.messages
    return (
        <div className={s.dialogsWrapper}>
            <FriendListFromDialogs/>
            <CurrentDialog messages={messages}/>
        </div>
    )
}
