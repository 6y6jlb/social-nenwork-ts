import React from "react";
import {ProfileWrapper} from "./ProfileWrapper";
import {
    addPostActionCreator,
    changePostInputActionCreator,
    InitialStateProfileType
} from "../../../Redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {Dispatch} from "redux";


/*
type ProfileWrapperContainerPropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void

}

export function ProfileWrapperContainer(props:any) {

    return <StoreContext.Consumer>
        {(store) =>
        {
            const state = store.getState()
            function onAddPost() {
                const trimmedPost = state.profileReducer.currentInputPost.trim()
                if (trimmedPost) {
                    store.dispatch(addPostActionCreator())
                    store.dispatch(changePostInputActionCreator(''))
                } else {
                    store.dispatch(changePostInputActionCreator(''))
                }
            }

            function onPostChanger(text: string) {
                store.dispatch(changePostInputActionCreator(text))
            }


            return <ProfileWrapper onPostChanger={onPostChanger} onAddPost={onAddPost}
                                   profileWrapperObj={state.profileReducer}/>
        }}
    </StoreContext.Consumer>

}

*/

type mapStateToProps = {
    profileWrapperObj: InitialStateProfileType
}
type MapDispatchToProps = {
    onPostChanger: (text: string) => void
    onAddPost: () => void
}


let mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        profileWrapperObj: state.profileReducer
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToProps => {
    return {
        onPostChanger: (text: string) => {
            dispatch(changePostInputActionCreator(text))
        },
        onAddPost: () => {
            dispatch(addPostActionCreator())
            dispatch(changePostInputActionCreator(''))
        }
    }
}


const ProfileWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileWrapper);
export default ProfileWrapperContainer;
