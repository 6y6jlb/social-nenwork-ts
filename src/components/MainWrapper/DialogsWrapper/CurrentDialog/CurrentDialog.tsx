import React from "react";
import s from './CurrentDialog.module.css';
import {SendMessageAreaFromCurrentDialog} from "./SendMessageAreaFromCurrentDialog/SendMessageAreaFromCurrentDialog";
import {IMessage} from "../../../../api/dialogsAPI";
import {MessagesFromCurrentDialog} from "./MessagesFromCurrentDialog/MessagesFromCurrentDialog";


export type CurrentDialogPropsType = {
    messages: Array<IMessage>
    onAddPost: (self: boolean,item:string) => void
    onPostChanger: (item: string) => void
    masterId:number | null

}

export const CurrentDialog:React.FC<CurrentDialogPropsType> = React.memo(({messages,onAddPost,onPostChanger,masterId}) => (
    <div className={ s.currentDialogWrapper }>
        <MessagesFromCurrentDialog masterId={masterId}  messages={ messages }/>
        <SendMessageAreaFromCurrentDialog onAddPost={ onAddPost } onPostChanger={ onPostChanger }/>
    </div>
));
