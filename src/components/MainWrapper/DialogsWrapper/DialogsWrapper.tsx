import React, {useEffect} from "react";
import {CurrentDialog} from "./CurrentDialog/CurrentDialog";
import {FriendListFromDialogs} from "./FriendListFromDialogs/FriendListFromDialogs";
import s from './DialogsWrapper.module.css';
import {MessagesFromDialogsType} from "../../../Redux/dialogsReducer";


export type DialogsWrapperPropsType = {
    addDialogsMessage: (self: boolean, item: string) => void
    changeDialogsInput: (item: string) => void
    getMessages: (id: number) => void
    postMessage: (id: number, message: string) => void
    getDialogs: () => void
    messages: Array<MessagesFromDialogsType>
    isAuth: boolean
    name: string | null
}

export const DialogsWrapper: React.FC<DialogsWrapperPropsType> = React.memo ( ({
                                                                                   getDialogs,
                                                                                   name,
                                                                                   changeDialogsInput,
                                                                                   addDialogsMessage,
                                                                                   messages,
                                                                                   isAuth,
                                                                                   getMessages,
                                                                                   postMessage,
                                                                               }) => {

    useEffect ( () => {
        getDialogs ();
    }, [] );
    useEffect ( () => {
        getMessages ( 19217 );
    }, [] );
    useEffect ( () => {
        postMessage ( 19217,'test' );
    }, [] );

    return <div className={ s.dialogsWrapper }>
        {/*<FriendListFromDialogs/>*/}
        {/*<CurrentDialog name={ name } onAddPost={ addDialogsMessage }*/}
        {/*               onPostChanger={ changeDialogsInput }*/}
        {/*               messages={ messages }/>*/}
    </div>;

} );
