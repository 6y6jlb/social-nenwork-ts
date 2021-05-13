import React from 'react';
import {DialogsWrapper} from "./DialogsWrapper";
import {
    actionsDialogs,
    InitialStateDialogsType
} from "../../../Redux/dialogsReducer";

import {connect} from "react-redux";

import {AppStateType} from "../../../Redux/reduxStore";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";


type MapStateToPropsType ={
    isAuth:boolean
    name:string|null
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType & InitialStateDialogsType => {
    return {
        messages: state.dialogsReducer.messages,
        isAuth:state.auth.isAuth,
        name:state.profileReducer.profile.fullName
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addDialogsMessage:actionsDialogs.addDialogsMessage}), withAuthRedirect)(DialogsWrapper)
