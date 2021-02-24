import React from "react";
import s from './MessageFromCurrentDialog.module.css'
import {MyMessage} from "./MyMessage/MyMessage";
import {MessagesFromDialogsType} from "../../../../../Redux/State";
import {NotMyMessage} from "./NotMyMessage/NotMyMessage";

export type MessageFromCurrentDialogPropsType = {
    messages: Array<MessagesFromDialogsType>
}

export function MessageFromCurrentDialog(props: MessageFromCurrentDialogPropsType) {

    let messagesBlock = props.messages.map(m => {
        return (
            !m.self ? <NotMyMessage self={m.self} avatarURL={m.avatarURL} id={m.id} item={m.item} key={m.id}/> :
                <MyMessage self={m.self} avatarURL={m.avatarURL} id={m.id} item={m.item} key={m.id}/>)
    })


    return (
        <div className={s.currentDialog}>
            {messagesBlock}
        </div>


    )
}