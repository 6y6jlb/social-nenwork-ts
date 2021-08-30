import React, {useCallback, useEffect} from "react";
import {CurrentDialog} from "./CurrentDialog/CurrentDialog";
import {FriendListFromDialogs} from "./FriendListFromDialogs/FriendListFromDialogs";
import s from './DialogsContainer.module.css';
import {IDialogs, IMessage, IPhotos} from "../../../api/dialogsAPI";
import {compose} from "redux";
import {connect, useSelector} from "react-redux";
import {actionsDialogs} from "../../../Redux/dialogsReducer";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import selectors from "../../../utils/selectors";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {NoData} from "../../common/NoData/NoData";


const DialogsContainer: React.FC<IProps> = React.memo ( ({
                                                             getDialogs,
                                                             changeDialogsInput,
                                                             addDialogsMessage,
                                                             getMessages,
                                                             postMessage,
                                                             deleteMessage,
                                                             toViewedMessage,
                                                             toSpamMessage,
                                                             setPage,
                                                             setPortionNumber,
                                                             ...props
                                                         }) => {
    const userId = props.match.params.userId;
    const {
        page,
        portionNumber,
        pageSize,
        isFetching,
        totalCount,
        dialogs,
        messages,
    } = useSelector ( selectors.dialogsSelectors.commonDialogsSelector );

    const masterId = useSelector ( selectors.authSelectors.getMyLoginId );
    const masterPhotos = useSelector ( selectors.profileSelectors.getPhotosProfile );

    const refreshProfile = useCallback ( () => {
        if (userId) {
            getMessages ( userId );
        }
    }, [userId] );
    useEffect ( () => {
        getDialogs ();
    }, [userId] );

    useEffect ( () => {
        refreshProfile ();
    }, [userId, page] );


    const sendMessageCallback = useCallback ( (id: string) => (text: string) => {
        postMessage ( +id, text );
    }, [] );
    const toViewedMessageCallback = useCallback ( (id: string) => (messageId: string) => {
        toViewedMessage ( +id, messageId );
    }, [] );
    const toSpamMessageCallback = useCallback ( (id: string) => (messageId: string) => {
        toViewedMessage ( +id, messageId );
    }, [] );
    const deleteMessageCallback = useCallback ( (id: string) => (messageId: string) => {
        deleteMessage ( +id, messageId );
    }, [] );

    const onPageChange = (page: number) => {
        setPage ( page );
    };
    const onPortionNumberChange = (portionNumber: number) => {
        setPortionNumber ( portionNumber );
    };

    const userPhotos = dialogs.find ( dialogue => dialogue.id === userId )?.photos;

    // const messagesWithPhotos = messages.map ( message => {
    //     if (message.senderId === userId) {
    //         return {...message, photos: userPhotos};
    //     } else {
    //         return {...message, photos: masterPhotos};
    //     }
    //
    // } );
    const photos:PhotosPropsType = {
        master: masterPhotos, user: userPhotos,
    };

    return (
        <div className={ s.dialogsWrapper }>
            <FriendListFromDialogs dialogs={ dialogs }/>
            { messages
                ? <CurrentDialog deleteMessage={ deleteMessageCallback ( userId ) }
                                 sendMessage={ sendMessageCallback ( userId ) }
                                 toSpamMessage={ toSpamMessageCallback ( userId ) }
                                 toViewedMessage={ toViewedMessageCallback ( userId ) }
                                 photos={ photos }
                                 friendId={ userId }
                                 portionNumber={ portionNumber }
                                 totalCount={ totalCount }
                                 page={ page }
                                 setPage={ onPageChange }
                                 setPortionNumber={ onPortionNumberChange }
                                 masterId={ masterId }
                                 messages={ messages }
                                 isFetching={ isFetching }/>

                : <NoData/> }
        </div>
    );

} );


//containerComponent


export default compose<React.ComponentType> (
    connect ( null, {
        addDialogsMessage: actionsDialogs.addDialogsMessage,
        getDialogs: actionsDialogs.getDialogs,
        getMessages: actionsDialogs.getMessages,
        postMessage: actionsDialogs.postMessage,
        deleteMessage: actionsDialogs.deleteMessage,
        toSpamMessage: actionsDialogs.toSpamMessage,
        toViewedMessage: actionsDialogs.toViewedMessage,
        setPage: actionsDialogs.setPage,
        setPortionNumber: actionsDialogs.setPortionNumber,
    } )
    , withRouter
    , withAuthRedirect ) ( DialogsContainer );


//types

export type PhotosPropsType ={
    master:IPhotos
    user:IPhotos | undefined
}

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
    setPage: (page: number) => void
    setPortionNumber: (portionNumber: number) => void
    getDialogs: () => void
    messages: Array<IMessage>
    dialogs: Array<IDialogs>
    masterId: number | null
}