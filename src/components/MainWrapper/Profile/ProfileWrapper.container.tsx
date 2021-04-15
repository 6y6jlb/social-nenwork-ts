import React from "react";
import {
    addPostActionCreator,
    changePostInputActionCreator,
    InitialStateProfileType,
    setUserProfileActionCreator,
    UserFromProfileResponseType
} from "../../../Redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import axios from "axios";
import {ProfileWrapper} from "./ProfileWrapper";





type ProfileWrapperAPIContainerPropsType = {
    onAddPost: () => void
    onPostChanger: (text: string) => void
    setUserProfile: (user:UserFromProfileResponseType) => void
    profileWrapperObj: InitialStateProfileType
    myLoginId:number|null
}

type WithRouterProfileType = {
    userId:number|any
}
type PropsType = RouteComponentProps<WithRouterProfileType> & ProfileWrapperAPIContainerPropsType

class ProfileWrapperAPIContainer extends React.Component<PropsType>{

    componentDidMount() {

        let userIdForURL = this.props.match.params.userId
        if (!userIdForURL) {
            userIdForURL = this.props.myLoginId //my autorzed id
        }
        axios.get<UserFromProfileResponseType> ( `https://social-network.samuraijs.com/api/1.0/profile/${userIdForURL}` )
            .then ( response => {
                    this.props.setUserProfile ( response.data )
                }
            )
    }//axios request with fetching and setProfile


    render() {
        return (
            <ProfileWrapper profileWrapperObj={this.props.profileWrapperObj} onAddPost={this.props.onAddPost} onPostChanger={this.props.onPostChanger}/>
        );
    }
}

let WithURLProfileWrapperApiContainer = withRouter(ProfileWrapperAPIContainer)

type mapStateToPropsType = {
    profileWrapperObj: InitialStateProfileType
    myLoginId:number|null
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profileWrapperObj: state.profileReducer,
        myLoginId:state.auth.data.id
    }
}

const ProfileWrapperContainer = connect ( mapStateToProps, {
    onPostChanger: changePostInputActionCreator,
    onAddPost: addPostActionCreator,
    setUserProfile:setUserProfileActionCreator
} ) ( WithURLProfileWrapperApiContainer );

export default ProfileWrapperContainer;
