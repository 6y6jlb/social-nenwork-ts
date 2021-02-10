import React from "react";
import s from './MessageFromCurrentDialog.module.css'
import {NotMyMessage} from "./NotMyMessage/NotMyMessage";
import {MyMessage} from "./MyMessage/MyMessage";

export type MessagesArrayFromCurrentDialogType = {
    id: number
    item: string
    enemy?: boolean
    avatarURL: string
}


type MessageFromCurrentDialogType = {
    messages: Array<MessagesArrayFromCurrentDialogType>
}

export function MessageFromCurrentDialog(props: MessageFromCurrentDialogType) {

    let messageBlock = props.messages.map(m => {
        return (
            !m.enemy ? <NotMyMessage avatarURL={m.avatarURL} id={m.id} item={m.item}/> :
                <MyMessage avatarURL={m.avatarURL} id={m.id} item={m.item}/>)
    })


    return (
        <div className={s.currentDialog}>
            {messageBlock}
        </div>


    )
}