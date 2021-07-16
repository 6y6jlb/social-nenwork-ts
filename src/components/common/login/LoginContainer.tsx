import Login from "./Login";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {actionsAuth} from "../../../Redux/auth-reducer";
import {compose} from "redux";
import React from "react";

type MapStateToPropsType = {
    isAuth:boolean
    captchaUrl:string|null
    userId:number|null
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth:state.auth.isAuth,
        captchaUrl:state.auth.captchaURL,
        userId:state.profileReducer.profile.userId
    }
}

export default compose<React.ComponentType> ( connect ( mapStateToProps, {loginTC:actionsAuth.loginSaga} ) ) ( Login );