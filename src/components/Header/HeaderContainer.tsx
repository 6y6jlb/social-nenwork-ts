import React from "react";
import {Header} from "./Header";
import {actionsAuth} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";


type MapStatePropsType = {
    isAuth: boolean
    login: string | null
    userId: number | null
}

type HeaderContainerPropsType = {
    isAuth: boolean
    login: string | null
    userId: number | null
    logout: () => void
}

class HeaderContainer extends React.PureComponent<HeaderContainerPropsType> {
    render() {
        return <Header logout={ this.props.logout } login={ this.props.login } isAuth={ this.props.isAuth }/>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login,
        userId: state.auth.data.id
    }
}

export default connect ( mapStateToProps, {
    logout:actionsAuth.logoutSaga
} ) (
    HeaderContainer );