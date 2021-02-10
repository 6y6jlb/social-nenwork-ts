import React from "react";
import s from './CurrentDialog.module.css'
import {SendMessageAreaFromCurrentDialog} from "./SendMessageAreaFromCurrentDialog/SendMessageAreaFromCurrentDialog";
import {MessageFromCurrentDialog} from "./MessageFromCurrentDialog/MessageFromCurrentDialog";

export function CurrentDialog() {
    const messages = [
        {id: 1, item: 'myMessage', enemy: true, avatarURL: 'images/face.png'},
        {id: 2, item: 'notMyMessage', enemy: false, avatarURL: 'images/face.png'},
        {id: 3, item: 'myMessage', enemy: true, avatarURL: 'images/face.png'},
        {id: 4, item: 'myMessage', enemy: true, avatarURL: 'images/face.png'},
        {id: 5, item: 'notMyMessage', enemy: false, avatarURL: 'images/face.png'},
        {id: 6, item: 'notMyMessage', enemy: false, avatarURL: 'images/face.png'},
        {id: 7, item: 'myMessage', enemy: true, avatarURL: 'images/face.png'},
        {id: 8, item: 'myMessage', enemy: true, avatarURL: 'images/face.png'},
        {id: 9, item: 'notMyMessage', enemy: false, avatarURL: 'images/face.png'},
        {id: 10, item: 'myMessage', enemy: true, avatarURL: 'images/face.png'},
        {id: 11, item: 'notMyMessage', enemy: false, avatarURL: 'images/face.png'},

    ]
    return (
        <div className={s.currentDialogWrapper}>

            <MessageFromCurrentDialog messages={messages}/>

            <SendMessageAreaFromCurrentDialog/>

        </div>
    )
}
