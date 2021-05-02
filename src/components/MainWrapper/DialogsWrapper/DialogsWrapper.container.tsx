import React from 'react';
import {DialogsWrapper} from "./DialogsWrapper";
import {
    addDialogsMessage,
    changeDialogsInput,
    InitialStateDialogsType
} from "../../../Redux/dialogsReducer";

import {connect} from "react-redux";

import {AppStateType} from "../../../Redux/reduxStore";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";


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
                            store.dispatch(addDialogsMessage(true))
                            store.dispatch(changeDialogsInput(''))
                        } else {
                            store.dispatch(changeDialogsInput(''))
                        }
                    }

                    function onPostChange(text: string) {
                        store.dispatch(changeDialogsInput(text))
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



export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        changeDialogsInput,addDialogsMessage
    }),
    withAuthRedirect
)(DialogsWrapper)
