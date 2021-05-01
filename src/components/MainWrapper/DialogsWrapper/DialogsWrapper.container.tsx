import React from 'react';
import {DialogsWrapper} from "./DialogsWrapper";
import {
    addDialogsMessageActionCreator,
    changeDialogsInputActionCreator,
    InitialStateDialogsType
} from "../../../Redux/dialogsReducer";

import {connect} from "react-redux";

import {AppStateType} from "../../../Redux/reduxStore";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";


/*export function DialogsWrapperContainer(props: any) {
    return (
        <StoreContext.Consumer>
            {
                store =>
                {
                    let state: any;
                    state = store.getState();
                    function onAddPost() {
                        const trimmedMessage = state.dialogsReducer.currentInputMessageString.trim()
                        if (trimmedMessage) {
                            store.dispatch(addDialogsMessageActionCreator(true))
                            store.dispatch(changeDialogsInputActionCreator(''))
                        } else {
                            store.dispatch(changeDialogsInputActionCreator(''))
                        }
                    }

                    function onPostChange(text: string) {
                        store.dispatch(changeDialogsInputActionCreator(text))
                    }

                    return <DialogsWrapper onAddPost={onAddPost} onPostChanger={onPostChange}
                                           messages={state.dialogsReducer.messages}
                                           currentInputMessageString={state.dialogsReducer.currentInputMessageString}/>
                }
            }

        </StoreContext.Consumer>
    )
}*/



type MapStateToPropsType ={
    isAuth:boolean
    name:string|null
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType & InitialStateDialogsType => {
    return {
        messages: state.dialogsReducer.messages,
        currentInputMessageString: state.dialogsReducer.currentInputMessageString,
        isAuth:state.auth.isAuth,
        name:state.profileReducer.profile.fullName
    }
}


const DialogsWrapperContainer = connect(mapStateToProps, {
    onPostChanger:changeDialogsInputActionCreator,onAddPost:addDialogsMessageActionCreator
})(withAuthRedirect(DialogsWrapper))
export default DialogsWrapperContainer;

