import React from "react";
import s from './CurrentDialog.module.css';
import {SendMessageAreaFromCurrentDialog} from "./SendMessageAreaFromCurrentDialog/SendMessageAreaFromCurrentDialog";
import {IMessage} from "../../../../api/dialogsAPI";
import {MessagesFromCurrentDialog} from "./MessagesFromCurrentDialog/MessagesFromCurrentDialog";
import Button from "../../../common/Button/Button";
import Preloader from "../../../common/preloader/Preloader";
import {NoData} from "../../../common/NoData/NoData";
import {FormattedMessage} from "../../../common/FormattedMessage/FormattedMessage";


export type CurrentDialogPropsType = {
    messages: Array<IMessage>
    masterId: number | null
    sendMessage: (id: string) => void
    deleteMessage: (messageId: string) => void
    toSpamMessage: (messageId: string) => void
    toViewedMessage: (messageId: string) => void
    getMoreMessages: () => void

}

export const CurrentDialog: React.FC<CurrentDialogPropsType> = React.memo ( ({
                                                                                 messages,
                                                                                 masterId,
                                                                                 sendMessage,
                                                                                 deleteMessage,
                                                                                 toSpamMessage,
                                                                                 toViewedMessage,
                                                                                 getMoreMessages,
                                                                             }) => {
    if (!messages.length) {
        return <NoData><FormattedMessage _id={'messages.empty'}/></NoData>
    }

    return <div className={ s.currentDialogWrapper }>
        <div className={ s.moreMessages }><Button text={ 'get more messages' } onClick={ getMoreMessages }/></div>
        <MessagesFromCurrentDialog toSpamMessage={ toSpamMessage } toViewedMessage={ toViewedMessage }
                                   deleteMessage={ deleteMessage } masterId={ masterId } messages={ messages }/>
        <SendMessageAreaFromCurrentDialog sendMessage={ sendMessage }/>
    </div>;
} );
