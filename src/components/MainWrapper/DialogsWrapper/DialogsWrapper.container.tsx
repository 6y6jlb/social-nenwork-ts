import React from 'react';
import {DialogsWrapper} from "./DialogsWrapper";
import {actionsDialogs, InitialStateDialogsType} from "../../../Redux/dialogsReducer";
import {connect} from "react-redux";

import {AppStateType} from "../../../Redux/reduxStore";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {difficultGetMessagestSelector, getFullName, getIsAuth, getMessages} from "../../../selectors/dialogs-selectors";


type MapStateToPropsType ={
    isAuth:boolean
    name:string|null
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType & InitialStateDialogsType => {
    return {
        messages: difficultGetMessagestSelector(state),//filter self===true in user-selectors/ test reselect
        isAuth:getIsAuth(state),
        name:getFullName(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addDialogsMessage:actionsDialogs.addDialogsMessage}), withAuthRedirect)(DialogsWrapper)
