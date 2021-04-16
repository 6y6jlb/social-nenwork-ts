import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {InitialStateFromAuthType, setUserDataActionCreator, SetUserDataType} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {setUserProfileActionCreator, UserFromProfileResponseType} from "../../Redux/profileReducer";

type ResponseHeaderContainerType = {
    data: SetUserDataType
    fieldsErrors: any
    messages: string
    resultCode: number
}
type MapStatePropsType = {
    isAuth:boolean
    login:string|null
    userId:number|null
}

type HeaderContainerPropsType = {
    setUser:(data:SetUserDataType)=>void
    setUserProfile:(user:UserFromProfileResponseType) => void
    isAuth:boolean
    login:string|null
    userId:number|null
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        console.log (this.props)
        axios.get<ResponseHeaderContainerType> ( `https://social-network.samuraijs.com/api/1.0/auth/me`,{
        withCredentials:true
        } )
            .then ( response => {
                const newData = response.data.data
               this.props.setUser( {...newData})
                }
            )
        axios.get<UserFromProfileResponseType> ( `https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}` )
            .then ( response => {
                    this.props.setUserProfile ( response.data )
                }
            )

    }

    render() {
            return <Header login={this.props.login} isAuth={this.props.isAuth} />

        }
}



const mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login,
        userId: state.auth.data.id
    }
}

export default connect (mapStateToProps,{
    setUser:setUserDataActionCreator,
    setUserProfile:setUserProfileActionCreator})(
    // @ts-ignore
        HeaderContainer);