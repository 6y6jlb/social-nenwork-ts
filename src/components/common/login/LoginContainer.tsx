import Login from "./Login";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {loginTC} from "../../../Redux/auth-reducer";
import {compose} from "redux";
import React from "react";

type MapStateToPropsType = {
    isAuth:boolean
    captchaUrl:string|null
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth:state.auth.isAuth,
        captchaUrl:state.auth.captchaURL
    }
}

export default compose<React.ComponentType> ( connect ( mapStateToProps, {loginTC} ) ) ( Login );