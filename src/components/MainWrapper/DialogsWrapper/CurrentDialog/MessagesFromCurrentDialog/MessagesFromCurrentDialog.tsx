import React from "react";
import s from './MessageFromCurrentDialog.module.css';
import {MyMessage} from "./MyMessage/MyMessage";
import {NotMyMessage} from "./NotMyMessage/NotMyMessage";
import {IMessage} from "../../../../../api/dialogsAPI";


export type MessageFromCurrentDialogPropsType = {
    messages: Array<IMessage>
    masterId: number | null
    deleteMessage: (messageId: string) => void
}

export const MessagesFromCurrentDialog: React.FC<MessageFromCurrentDialogPropsType> = React.memo ( ({
                                                                                                        messages,
                                                                                                        masterId,
                                                                                                        deleteMessage,
                                                                                                    }) => {
    const messagesBlock = messages.map ( message => {
        const self = message.senderId === masterId; //определяем чей месадж
        return (
            self
                ? <MyMessage deleteMessage={ deleteMessage } message={ message }/>
                : <NotMyMessage deleteMessage={ deleteMessage } message={ message }/>);
    } );

    return (
        <div className={ s.currentDialog }>
            { messagesBlock }
        </div>


    );
} );