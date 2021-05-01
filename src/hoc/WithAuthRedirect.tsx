import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/reduxStore";
import {Redirect} from "react-router-dom";


type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {isAuth: state.auth.isAuth}
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props;
        return !isAuth
            ? <Redirect to={ '/login' }/>
            : <Component { ...restProps as T } />
    }

    return connect ( mapStateToProps ) ( RedirectComponent )

}
