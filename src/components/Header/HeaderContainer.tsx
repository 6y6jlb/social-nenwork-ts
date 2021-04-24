import React from "react";
import {Header} from "./Header";
import {setUserDataActionCreator, SetUserDataType, setUserFromHeaderTC} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {setUserProfileActionCreator, UserFromProfileResponseType} from "../../Redux/profileReducer";
import {AuthAPI, ProfileAPI} from "../../api/api";


type MapStatePropsType = {
    isAuth:boolean
    login:string|null
    userId:number|null
}

type HeaderContainerPropsType = {
    setUser:(data:SetUserDataType)=>void
    setUserProfile:(user:UserFromProfileResponseType) => void
    setUserFromHeaderTC:()=>void
    isAuth:boolean
    login:string|null
    userId:number
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
      /*  axios.get<ResponseHeaderContainerType> ( `https://social-network.samuraijs.com/api/1.0/auth/me`,{
        withCredentials:true
        } )*/
        this.props.setUserFromHeaderTC()
        // AuthAPI.setUser()
        //     .then ( response => {
        //         const newData = response.data.data
        //        this.props.setUser( {...newData})
        //         }
        //     ).catch(err=>{
        //         console.error(err)
        //     }
        // )
        /*axios.get<UserFromProfileResponseType> ( `https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}` )*/
            ProfileAPI.setUserProfile(this.props.userId)
            .then ( response => {
                    this.props.setUserProfile ( response.data )
                }
            ).catch(err=>{
                console.error(err)
            })

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
    setUserProfile:setUserProfileActionCreator,
    setUserFromHeaderTC})(
    // @ts-ignore
        HeaderContainer);