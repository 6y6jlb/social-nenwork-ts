import React from "react";
import s from './CurrentDialog.module.css'
import {SendMessageAreaFromCurrentDialog} from "./SendMessageAreaFromCurrentDialog/SendMessageAreaFromCurrentDialog";
import {MessageFromCurrentDialog} from "./MessageFromCurrentDialog/MessageFromCurrentDialog";
import { DialogsWrapperPropsType } from "../DialogsWrapper";




export function CurrentDialog(props: DialogsWrapperPropsType) {


    return (
        <div className={s.currentDialogWrapper}>

            <MessageFromCurrentDialog messages={props.messages}/>

            <SendMessageAreaFromCurrentDialog addMessageFromDialogs={props.addMessageFromDialogs} />

        </div>
    )
}
