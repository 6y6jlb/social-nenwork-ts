import React from "react";
import s from './CurrentDialog.module.css';
import {SendMessageAreaFromCurrentDialog} from "./SendMessageAreaFromCurrentDialog/SendMessageAreaFromCurrentDialog";
import {IMessage} from "../../../../api/dialogsAPI";
import {MessagesFromCurrentDialog} from "./MessagesFromCurrentDialog/MessagesFromCurrentDialog";


export type CurrentDialogPropsType = {
    messages: Array<IMessage>
    masterId: number | null
    sendMessage: (id: string) => void
    deleteMessage: (messageId: string) => void
    toSpamMessage: (messageId: string) => void
    toViewedMessage: (messageId: string) => void

}

export const CurrentDialog: React.FC<CurrentDialogPropsType> = React.memo ( ({
                                                                                 messages,
                                                                                 masterId,
                                                                                 sendMessage,
                                                                                 deleteMessage,
                                                                                 toSpamMessage,
                                                                                 toViewedMessage,
                                                                             }) => (
    <div className={ s.currentDialogWrapper }>
        <MessagesFromCurrentDialog toSpamMessage={ toSpamMessage } toViewedMessage={ toViewedMessage }
                                   deleteMessage={ deleteMessage } masterId={ masterId } messages={ messages }/>
        <SendMessageAreaFromCurrentDialog sendMessage={ sendMessage }/>
    </div>
) );
