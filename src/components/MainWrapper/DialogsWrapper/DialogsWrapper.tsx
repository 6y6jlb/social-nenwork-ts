import React, {useEffect} from "react";
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



const DialogsWrapper: React.FC<DialogsWrapperPropsType> = React.memo ( ({
                                                                                   getDialogs,
                                                                                   changeDialogsInput,
                                                                                   addDialogsMessage,
                                                                                   messages,
                                                                                   getMessages,
                                                                                   postMessage,
                                                                                   dialogs,
                                                                                   masterId
                                                                               }) => {

    useEffect ( () => {
        getDialogs ();
    }, [] );
    useEffect ( () => {
        getMessages ( 19217 );
    }, [] );
    // useEffect ( () => {
    //     postMessage ( 19217,'test' );
    // }, [] );

    return <div className={ s.dialogsWrapper }>
        <FriendListFromDialogs dialogs={ dialogs }/>
        { messages ?
            <CurrentDialog masterId={masterId} onAddPost={ addDialogsMessage }
                           onPostChanger={ changeDialogsInput }
                           messages={ messages }/>
            : <div>empty</div> }
    </div>;

} );


//containerComponent

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messages: selectors.dialogsSelectors.getMessages ( state ),//filter self===true in user-selectors/ test reselect
        dialogs:selectors.dialogsSelectors.getDialogs(state),
        masterId:selectors.authSelectors.getMyLoginId(state)
    };
};

export default compose<React.ComponentType> (
    connect ( mapStateToProps, {
        addDialogsMessage: actionsDialogs.addDialogsMessage,
        getDialogs: actionsDialogs.getDialogs,
        getMessages: actionsDialogs.getMessages,
        postMessage: actionsDialogs.postMessage,
    } ), withAuthRedirect ) ( DialogsWrapper );


//types

type MapStateToPropsType = {
    messages:Array<IMessage>
    dialogs:Array<IDialogs>
    masterId:number | null
}


export type DialogsWrapperPropsType = {
    addDialogsMessage: (self: boolean, item: string) => void
    changeDialogsInput: (item: string) => void
    getMessages: (id: number) => void
    postMessage: (id: number, message: string) => void
    getDialogs: () => void
    messages: Array<IMessage>
    dialogs: Array<IDialogs>
    masterId:number | null
}