import React from "react";
import {ProfileWrapper} from "../ProfileWrapper";
import {InitialStateProfileType, UserFromProfileResponseType} from "../../../../Redux/profileReducer";
import axios from "axios";


type ProfileWrapperAPIContainerPropsType = {
    onAddPost: () => void
    onPostChanger: (text: string) => void
    setUserProfile: (user:UserFromProfileResponseType) => void
    profileWrapperObj: InitialStateProfileType
}

class ProfileWrapperAPIContainer extends React.Component<any, any>{

    componentDidMount() {
        let userIdForURL = this.props.match.params.userId
        if (!userIdForURL) {
            userIdForURL = 2
        }
        axios.get<UserFromProfileResponseType> ( `https://social-network.samuraijs.com/api/1.0/profile/${userIdForURL}` )
            .then ( response => {
                debugger
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

export default ProfileWrapperAPIContainer;