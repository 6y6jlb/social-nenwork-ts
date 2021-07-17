import React from 'react';
import {DialogsWrapper} from "./DialogsWrapper";
import {actionsDialogs, InitialStateDialogsType} from "../../../Redux/dialogsReducer";
import {connect} from "react-redux";

import {AppStateType} from "../../../Redux/reduxStore";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";
import selectors from '../../../utils/selectors';


type MapStateToPropsType ={
    isAuth:boolean
    name:string|null
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType & InitialStateDialogsType => {
    return {
        messages: selectors.dialogsSelectors.difficultGetMessagesSelector(state),//filter self===true in user-selectors/ test reselect
        isAuth:selectors.authSelectors.getIsAuth(state),
        name:selectors.dialogsSelectors.getFullName(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addDialogsMessage:actionsDialogs.addDialogsMessage}), withAuthRedirect)(DialogsWrapper)
