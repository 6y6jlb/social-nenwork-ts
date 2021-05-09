import React from "react";
import s from './CurrentDialog.module.css'
import {SendMessageAreaFromCurrentDialog} from "./SendMessageAreaFromCurrentDialog/SendMessageAreaFromCurrentDialog";
import {MessageFromCurrentDialog} from "./MessageFromCurrentDialog/MessageFromCurrentDialog";
import {MessagesFromDialogsType} from "../../../../Redux/dialogsReducer";


export type CurrentDialogPropsType = {
    messages: Array<MessagesFromDialogsType>
    onAddPost: (self: boolean,item:string) => void
    onPostChanger: (item: string) => void
    name:string|null
    /* dispatch: (action:ActionsTypes)=>void*/
}


export function CurrentDialog(props: CurrentDialogPropsType) {


    return (
        <div className={s.currentDialogWrapper}>

            <MessageFromCurrentDialog name={props.name} messages={props.messages}/>

            <SendMessageAreaFromCurrentDialog onAddPost={props.onAddPost} onPostChanger={props.onPostChanger}/>

        </div>
    )
}
