import React from "react";
import s from './MessageFromCurrentDialog.module.css';
import {MyMessage} from "./MyMessage/MyMessage";
import {NotMyMessage} from "./NotMyMessage/NotMyMessage";
import {IMessage} from "../../../../../api/dialogsAPI";


export type MessageFromCurrentDialogPropsType = {
    messages: Array<IMessage>
    masterId: number | null
}

export const MessagesFromCurrentDialog: React.FC<MessageFromCurrentDialogPropsType> = React.memo ( ({
                                                                                                        messages,
                                                                                                        masterId,
                                                                                                    }) => {
    const messagesBlock = messages.map ( message => {
        const self = message.senderId === masterId; //определяем чей месадж
        return (
            self
                ? <MyMessage message={ message }/>
                : <NotMyMessage message={ message }/>);
    } );

    return (
        <div className={ s.currentDialog }>
            { messagesBlock }
        </div>


    );
} );