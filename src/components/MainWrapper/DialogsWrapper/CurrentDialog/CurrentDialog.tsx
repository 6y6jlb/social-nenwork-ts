import React from "react";
import s from './CurrentDialog.module.css'
import {SendMessageAreaFromCurrentDialog} from "./SendMessageAreaFromCurrentDialog/SendMessageAreaFromCurrentDialog";
import {MessageFromCurrentDialog} from "./MessageFromCurrentDialog/MessageFromCurrentDialog";

import {MessagesFromDialogsType} from "../../../../Redux/State";

export type CurrentDialogPropsType ={
    messages: Array<MessagesFromDialogsType>
    addMessageFromDialogs: (value:string,self:boolean)=>void
    textAreaFromDialogsChanger:(item:string)=>void
    currentInputMessageString:string
}


export function CurrentDialog(props: CurrentDialogPropsType) {


    return (
        <div className={s.currentDialogWrapper}>

            <MessageFromCurrentDialog   messages={props.messages}/>

            <SendMessageAreaFromCurrentDialog textAreaFromDialogsChanger={props.textAreaFromDialogsChanger}
                                              currentInputMessageString={props.currentInputMessageString}
                                              addMessageFromDialogs={props.addMessageFromDialogs} />

        </div>
    )
}
