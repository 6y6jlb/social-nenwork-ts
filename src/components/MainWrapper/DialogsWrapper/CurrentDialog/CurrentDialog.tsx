import React from "react";
import s from './CurrentDialog.module.css';
import {SendMessageAreaFromCurrentDialog} from "./SendMessageAreaFromCurrentDialog/SendMessageAreaFromCurrentDialog";
import {IMessage} from "../../../../api/dialogsAPI";
import {MessagesFromCurrentDialog} from "./MessagesFromCurrentDialog/MessagesFromCurrentDialog";
import {NoData} from "../../../common/NoData/NoData";
import {FormattedMessage} from "../../../common/FormattedMessage/FormattedMessage";
import Paginator from "../../../common/Paginator/Paginator";


export type CurrentDialogPropsType = {
    messages: Array<IMessage>
    masterId: number | null
    friendId: number | null
    totalCount: number
    sendMessage: (id: string) => void
    deleteMessage: (messageId: string) => void
    toSpamMessage: (messageId: string) => void
    toViewedMessage: (messageId: string) => void
    setPage: (page: number) => void
    setPortionNumber: (portionNumber: number) => void
    portionNumber: number
    page: number

}

export const CurrentDialog: React.FC<CurrentDialogPropsType> = React.memo ( ({
                                                                                 messages,
                                                                                 masterId,
                                                                                 sendMessage,
                                                                                 deleteMessage,
                                                                                 toSpamMessage,
                                                                                 toViewedMessage,
                                                                                 setPage,
                                                                                 page,
                                                                                 portionNumber,
                                                                                 setPortionNumber,
                                                                                 totalCount,
                                                                                 friendId,
                                                                             }) => {

    if (!friendId) {
        return <NoData><FormattedMessage _id={ 'messages.empty' }/></NoData>;
    }

    return <div className={ s.currentDialogWrapper }>
        <div className={ s.paginator }>
            { totalCount > 7 &&
            <Paginator changePortionNumber={ setPortionNumber } portionNumber={ portionNumber }
                       totalCount={ totalCount } currentPage={ page }
                       onPageChanged={ setPage }/>
            }
        </div>
        <MessagesFromCurrentDialog toSpamMessage={ toSpamMessage } toViewedMessage={ toViewedMessage }
                                   deleteMessage={ deleteMessage } masterId={ masterId } messages={ messages }/>
        <SendMessageAreaFromCurrentDialog sendMessage={ sendMessage }/>
    </div>;
} );
