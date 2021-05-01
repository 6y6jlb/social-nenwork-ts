import React from "react";
import {CurrentDialog} from "./CurrentDialog/CurrentDialog";
import {FriendListFromDialogs} from "./FriendListFromDialogs/FriendListFromDialogs";
import s from './DialogsWrapper.module.css';
import {MessagesFromDialogsType} from "../../../Redux/dialogsReducer";
import {Redirect} from "react-router-dom";


export type DialogsWrapperPropsType = {
    /*dispatch: (action:ActionsTypes)=>void*/
    onAddPost: (self: boolean) => void
    onPostChanger: (item: string) => void
    messages: Array<MessagesFromDialogsType>
    currentInputMessageString: string
    isAuth: boolean
    name: string | null

}

export const DialogsWrapper: React.FC<DialogsWrapperPropsType> = (props) => {
    return <div className={ s.dialogsWrapper }>
            <FriendListFromDialogs/>
            <CurrentDialog name={ props.name } onAddPost={ props.onAddPost } onPostChanger={ props.onPostChanger }
                           currentInputMessageString={ props.currentInputMessageString }
                           messages={ props.messages }/>
        </div>

};
