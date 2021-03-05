import React from "react";
import s from './CurrentDialog.module.css'
import {SendMessageAreaFromCurrentDialog} from "./SendMessageAreaFromCurrentDialog/SendMessageAreaFromCurrentDialog";
import {MessageFromCurrentDialog} from "./MessageFromCurrentDialog/MessageFromCurrentDialog";

import {ActionsTypes, MessagesFromDialogsType} from "../../../../Redux/State";

export type CurrentDialogPropsType ={
    messages: Array<MessagesFromDialogsType>
    dispatch: (action:ActionsTypes)=>void
    currentInputMessageString:string
}


export function CurrentDialog(props: CurrentDialogPropsType) {


    return (
        <div className={s.currentDialogWrapper}>

            <MessageFromCurrentDialog   messages={props.messages}/>

            <SendMessageAreaFromCurrentDialog dispatch={props.dispatch}
                                              currentInputMessageString={props.currentInputMessageString}/>

        </div>
    )
}
