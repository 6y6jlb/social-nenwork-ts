import React from "react";
import s from './MessageFromCurrentDialog.module.css';

import {IMessage} from "../../../../../api/dialogsAPI";
import {Message} from "./Message/Message";


export type MessageFromCurrentDialogPropsType = {
    messages: Array<IMessage>
    masterId: number | null
    deleteMessage: (messageId: string) => void
    toSpamMessage: (messageId: string) => void
    toViewedMessage: (messageId: string) => void
}

export const MessagesFromCurrentDialog: React.FC<MessageFromCurrentDialogPropsType> = React.memo ( ({
                                                                                                        messages,
                                                                                                        masterId,
                                                                                                        deleteMessage,
                                                                                                        toViewedMessage,
                                                                                                        toSpamMessage,
                                                                                                    }) => {
    const messagesBlock = messages.map ( message => {
        const isSelf = message.senderId === masterId; //определяем чей месадж
        return <Message toSpamMessage={ toSpamMessage } toViewedMessage={ toViewedMessage } isSelf={ isSelf }
                        deleteMessage={ deleteMessage } message={ message }/>;
    } );

    return (
        <div className={ s.currentDialog }>
            { messagesBlock }
        </div>


    );
} );