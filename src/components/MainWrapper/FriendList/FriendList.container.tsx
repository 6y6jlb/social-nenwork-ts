import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {Dispatch} from "redux";
import {
    addMoreUsersActionCreator,
    followActionCreator,
    InitialStateUsersType,
    unFollowActionCreator,
    UserType
} from "../../../Redux/usersReducer";
import FriendListC from "./FriendListC";

type MapStateToPropsType = {
    users: InitialStateUsersType
}
type MapDispatchToPropsType = {
    followCallBack: (id: number) => void
    unFollowCallBack: (id: number) => void
    setUsers: (users:UserType[])=>void
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
        setUsers (users:UserType[]) {
            dispatch(addMoreUsersActionCreator(users))
        }
    }
}

const FriendListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendListC)
export default FriendListContainer;