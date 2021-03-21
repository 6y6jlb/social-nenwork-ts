import React from "react";
import {CurrentDialog} from "./CurrentDialog/CurrentDialog";
import {FriendListFromDialogs} from "./FriendListFromDialogs/FriendListFromDialogs";
import s from './DialogsWrapper.module.css';
import {MessagesFromDialogsType} from "../../../Redux/dialogsReducer";



export type DialogsWrapperPropsType = {
    /*dispatch: (action:ActionsTypes)=>void*/
    onAddPost: ()=>void
    onPostChanger: (text:string)=>void
    messages: Array<MessagesFromDialogsType>
    currentInputMessageString:string

}

export function DialogsWrapper(props:DialogsWrapperPropsType) {
    return (
        <div className={s.dialogsWrapper}>
            <FriendListFromDialogs/>
            <CurrentDialog onAddPost={props.onAddPost} onPostChanger={props.onPostChanger}
                           currentInputMessageString={props.currentInputMessageString}
                           messages={props.messages}/>
        </div>
    )
}
