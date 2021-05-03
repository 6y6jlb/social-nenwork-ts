import React from "react";
import {Header} from "./Header";
import {setUserData, SetUserDataType, setUserTC} from "../../Redux/auth-reducer";
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
    setUser: (data: SetUserDataType) => void
    setUserProfile: (user: UserFromProfileResponseType) => void
    setUserFromHeaderTC: () => void
    isAuth: boolean
    login: string | null
    userId: number
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
       Promise.resolve( this.props.setUserFromHeaderTC ()).then(()=>{
           if (this.props.userId){
               ProfileAPI.setUserProfile ( this.props.userId)
                   .then ( response => {
                           this.props.setUserProfile ( response.data )
                       }
                   ).catch ( err => {
                   console.error ( err )
               } )
           }

       })


        /*  axios.get<ResponseHeaderContainerType> ( `https://social-network.samuraijs.com/api/1.0/auth/me`,{
          withCredentials:true
          } )*/
        /* const setUser = async () => {
             await this.props.setUserTC ();
             await ProfileAPI.setUserProfile ( this.props.userId )
                 .then ( response => {
                         this.props.setUserProfile ( response.data )
                     }
                 ).catch ( err => {
                     console.error ( err )
                 } );
         }
          setUser()*/
        /*Promise.all([this.props.setUserTC (),
         ProfileAPI.setUserProfile ( this.props.userId )
            .then ( response => {
                    this.props.setUserProfile ( response.data )
                }
            ).catch ( err => {
                console.error ( err )
            } )])

*/

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


    }

    render() {
        return <Header login={ this.props.login } isAuth={ this.props.isAuth }/>

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
    setUser: setUserData,
    setUserProfile: setUserProfile,
    setUserFromHeaderTC: setUserTC
} ) (
    // @ts-ignore
    HeaderContainer );