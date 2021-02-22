import React from "react";
import s from './CurrentDialog.module.css'
import {SendMessageAreaFromCurrentDialog} from "./SendMessageAreaFromCurrentDialog/SendMessageAreaFromCurrentDialog";
import {MessageFromCurrentDialog} from "./MessageFromCurrentDialog/MessageFromCurrentDialog";
import {DialogWrapperObjType} from "../../../../Redux/State";



export function CurrentDialog(props: DialogWrapperObjType) {


    return (
        <div className={s.currentDialogWrapper}>

            <MessageFromCurrentDialog messages={props.messages}/>

            <SendMessageAreaFromCurrentDialog/>

        </div>
    )
}
