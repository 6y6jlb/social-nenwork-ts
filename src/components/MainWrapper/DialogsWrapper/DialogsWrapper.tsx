import React from "react";
import {CurrentDialog} from "./CurrentDialog/CurrentDialog";
import {FriendListFromDialogs} from "./FriendListFromDialogs/FriendListFromDialogs";
import s from './DialogsWrapper.module.css';
import {MessagesFromDialogsType} from "../../../Redux/dialogsReducer";


export type DialogsWrapperPropsType = {
    /*dispatch: (action:ActionsTypes)=>void*/
    addDialogsMessage: (self: boolean,item:string) => void
    changeDialogsInput: (item: string) => void
    messages: Array<MessagesFromDialogsType>
    currentInputMessageString: string
    isAuth: boolean
    name: string | null

}

export const DialogsWrapper: React.FC<DialogsWrapperPropsType> = (props) => {
    return <div className={ s.dialogsWrapper }>
            <FriendListFromDialogs/>
            <CurrentDialog name={ props.name } onAddPost={ props.addDialogsMessage } onPostChanger={ props.changeDialogsInput }
                           currentInputMessageString={ props.currentInputMessageString }
                           messages={ props.messages }/>
        </div>

};
