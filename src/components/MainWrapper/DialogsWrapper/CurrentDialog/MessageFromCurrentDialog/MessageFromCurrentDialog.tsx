import React from "react";
import s from './MessageFromCurrentDialog.module.css'
import {NotMyMessage} from "./NotMyMessage/NotMyMessage";
import {MyMessage} from "./MyMessage/MyMessage";
import {DialogWrapperObjType} from "../../../../../Redux/State";



export function MessageFromCurrentDialog(props: DialogWrapperObjType) {

    let messagesBlock = props.messages.map(m => {
        return (
            !m.enemy ? <NotMyMessage enemy={m.enemy} avatarURL={m.avatarURL} id={m.id} item={m.item} key={m.id}/> :
                <MyMessage enemy={m.enemy} avatarURL={m.avatarURL} id={m.id} item={m.item} key={m.id}/>)
    })


    return (
        <div className={s.currentDialog}>
            {messagesBlock}
        </div>


    )
}