import React from 'react';
import {DialogsWrapper} from "./DialogsWrapper";
import {
    addDialogsMessageActionCreator,
    changeDialogsInputActionCreator,
    InitialStateDialogsType
} from "../../../Redux/dialogsReducer";

import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../Redux/reduxStore";


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


type MapStateToPropsType = InitialStateDialogsType
type MapDispatchToProps = {
    onAddPost: () => void
    onPostChanger: (text: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messages: state.dialogsReducer.messages,
        currentInputMessageString: state.dialogsReducer.currentInputMessageString
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        onAddPost: () => {
            dispatch(addDialogsMessageActionCreator(true))
            dispatch(changeDialogsInputActionCreator(''))
            /*const trimmedMessage = state.currentInputMessageString.trim()
            if (trimmedMessage) {
                dispatch(addDialogsMessageActionCreator(true))
                dispatch(changeDialogsInputActionCreator(''))
            } else {
                dispatch(changeDialogsInputActionCreator(''))
            }*/
        },
        onPostChanger: (text: string) => {
            dispatch(changeDialogsInputActionCreator(text))
        }
    }
}

const DialogsWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWrapper)
export default DialogsWrapperContainer;

