import React, {useEffect, useRef} from "react";
import s from './MessageFromCurrentDialog.module.css';

import {IMessage} from "../../../../../api/dialogsAPI";
import {Message} from "./Message/Message";
import {FormattedMessage} from "../../../../common/FormattedMessage/FormattedMessage";
import {NoData} from "../../../../common/NoData/NoData";
import {PhotosPropsType} from "../../DialogsContainer";


export type MessageFromCurrentDialogPropsType = {
    messages: Array<IMessage>
    masterId: number | null
    deleteMessage: (messageId: string) => void
    toSpamMessage: (messageId: string) => void
    toViewedMessage: (messageId: string) => void
    photos: PhotosPropsType
}

export const MessagesFromCurrentDialog: React.FC<MessageFromCurrentDialogPropsType> = React.memo ( ({
                                                                                                        messages,
                                                                                                        masterId,
                                                                                                        deleteMessage,
                                                                                                        toViewedMessage,
                                                                                                        toSpamMessage,
                                                                                                        photos,
                                                                                                    }) => {

    const messagesEndRef = useRef<HTMLDivElement> ( null );

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView ( {behavior: "smooth"} );
    };

    useEffect ( () => {
        scrollToBottom ();
    }, [messages] );

    const messagesBlock = messages.map ( message => {
        const isSelf = message.senderId === masterId; //определяем чей месадж
        return <Message photos={photos} toSpamMessage={ toSpamMessage } toViewedMessage={ toViewedMessage } isSelf={ isSelf }
                        deleteMessage={ deleteMessage } message={ message }/>;
    } );
    return (
        <div className={ s.currentDialog }>
            { messagesBlock.length
                ? messagesBlock
                : <NoData emptyBox={ 2 }><FormattedMessage _id={ 'messages.empty' }/></NoData> }
            <div className={ s.end } ref={ messagesEndRef }/>
        </div>


    );
} );