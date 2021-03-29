import React from "react";
import {connect} from "react-redux";
import FriendList from "./FriendList";
import {AppStateType} from "../../../Redux/reduxStore";
import {Dispatch} from "redux";
import {followActionCreator, InitialStateUsersType, unFollowActionCreator} from "../../../Redux/usersReducer";

type MapStateToPropsType = {
    users: InitialStateUsersType
}
type MapDispatchToPropsType = {
    followCallBack: (id: number) => void
    unFollowCallBack: (id: number) => void
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        users:state.usersReducer
    }
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToPropsType {
    return {
        followCallBack: (id: number) => {
            dispatch(followActionCreator(id))
        },
        unFollowCallBack: (id: number) => {
            dispatch(unFollowActionCreator(id))
        },
    }
}

const FriendListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendList)
export default FriendListContainer;