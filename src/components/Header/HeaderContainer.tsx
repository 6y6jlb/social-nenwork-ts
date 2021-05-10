import React from "react";
import {Header} from "./Header";
import {logoutTC, setUserData, SetUserDataType, setUserTC} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {setUserProfile, UserFromProfileResponseType} from "../../Redux/profileReducer";
import {ProfileAPI} from "../../api/api";


type MapStatePropsType = {
    isAuth: boolean
    login: string | null
    userId: number | null
}

type HeaderContainerPropsType = {
    setUserProfile: (user: UserFromProfileResponseType) => void
    setUserTC: (isAuth:boolean) => void
    isAuth: boolean
    login: string | null
    userId: number | null
    logoutTC:()=>void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.setUserTC(true)

    }
    render() {
        return <Header logoutTC={this.props.logoutTC} login={ this.props.login } isAuth={ this.props.isAuth }/>

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
    setUserProfile,
    setUserTC,
    logoutTC


} ) (
    HeaderContainer );