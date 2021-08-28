import React, {useEffect, useState} from "react";
import {CurrentDialog} from "./CurrentDialog/CurrentDialog";
import {FriendListFromDialogs} from "./FriendListFromDialogs/FriendListFromDialogs";
import s from './DialogsWrapper.module.css';
import {IDialogs, IMessage} from "../../../api/dialogsAPI";
import {compose} from "redux";
import {connect} from "react-redux";
import {actionsDialogs} from "../../../Redux/dialogsReducer";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {AppStateType} from "../../../Redux/reduxStore";
import selectors from "../../../utils/selectors";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {MESSAGES_COUNT} from "../../../variables/consts";


const DialogsWrapper: React.FC<IProps> = React.memo ( ({
                                                           getDialogs,
                                                           changeDialogsInput,
                                                           addDialogsMessage,
                                                           messages,
                                                           getMessages,
                                                           postMessage,
                                                           dialogs,
                                                           masterId,
                                                           deleteMessage,
                                                           toViewedMessage,
                                                           toSpamMessage,
                                                           ...props
                                                       }) => {
    const [count, setCount] = useState ( MESSAGES_COUNT );
    const userIdForURL = props.match.params.userId;

    const refreshProfile = () => {
        if (userIdForURL) {
            getMessages ( userIdForURL, count );
        }
    };

    const getMoreMessages = ()=>{
        setCount(count+10)
    }

    useEffect ( () => {
        getDialogs ();
        refreshProfile ();
    }, [userIdForURL,count] );


    const sendMessageCallback = (id: string) => (text: string) => {
        postMessage ( +id, text );
    };
    const toViewedMessageCallback = (id: string) => (messageId: string) => {
        toViewedMessage ( +id, messageId );
    };
    const toSpamMessageCallback = (id: string) => (messageId: string) => {
        toViewedMessage ( +id, messageId );
    };
    const deleteMessageCallback = (id: string) => (messageId: string) => {
        deleteMessage ( +id, messageId );
    };

    return <div className={ s.dialogsWrapper }>
        <FriendListFromDialogs dialogs={ dialogs }/>
        { messages ?
            <CurrentDialog deleteMessage={ deleteMessageCallback ( userIdForURL ) }
                           sendMessage={ sendMessageCallback ( userIdForURL ) }
                           toSpamMessage={ toSpamMessageCallback ( userIdForURL ) }
                           toViewedMessage={ toViewedMessageCallback ( userIdForURL ) }
                           getMoreMessages={getMoreMessages}
                           masterId={ masterId }
                           messages={ messages }/>
            : <div>empty</div> }
    </div>;

} );


//containerComponent

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messages: selectors.dialogsSelectors.getMessages ( state ),//filter isSelf===true in user-selectors/ test reselect
        dialogs: selectors.dialogsSelectors.getDialogs ( state ),
        masterId: selectors.authSelectors.getMyLoginId ( state ),
    };
};

export default compose<React.ComponentType> (
    connect ( mapStateToProps, {
        addDialogsMessage: actionsDialogs.addDialogsMessage,
        getDialogs: actionsDialogs.getDialogs,
        getMessages: actionsDialogs.getMessages,
        postMessage: actionsDialogs.postMessage,
        deleteMessage: actionsDialogs.deleteMessage,
        toSpamMessage: actionsDialogs.toSpamMessage,
        toViewedMessage: actionsDialogs.toViewedMessage,
    } )
    , withRouter
    , withAuthRedirect ) ( DialogsWrapper );


//types

type WithRouterType = {
    userId: number | any
}

type MapStateToPropsType = {
    messages: Array<IMessage>
    dialogs: Array<IDialogs>
    masterId: number | null
}


type IProps = RouteComponentProps<WithRouterType> & DialogsWrapperPropsType

export type DialogsWrapperPropsType = {
    addDialogsMessage: (self: boolean, item: string) => void
    changeDialogsInput: (item: string) => void
    getMessages: (id: number, count?: number) => void
    postMessage: (id: number, message: string) => void
    deleteMessage: (id: number, messageId: string) => void
    toSpamMessage: (id: number, messageId: string) => void
    toViewedMessage: (id: number, messageId: string) => void
    getDialogs: () => void
    messages: Array<IMessage>
    dialogs: Array<IDialogs>
    masterId: number | null
}