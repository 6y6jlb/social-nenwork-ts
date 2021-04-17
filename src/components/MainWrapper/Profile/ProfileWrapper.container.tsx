import React from "react";
import {
    addPostActionCreator,
    changeIsFetchingFromProfileActionCreator,
    changePostInputActionCreator,
    InitialStateProfileType,
    setUserProfileActionCreator,
    UserFromProfileResponseType
} from "../../../Redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileWrapper} from "./ProfileWrapper";
import {ProfileAPI} from "../../../api/api";


type ProfileWrapperAPIContainerPropsType = {
    onAddPost: () => void
    onPostChanger: (text: string) => void
    setUserProfile: (user:UserFromProfileResponseType) => void
    changeIsFetchingFromProfile:(isFetching:boolean)=>void
    profileWrapperObj: InitialStateProfileType
    myLoginId:number|null
    isFetching:boolean
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
        this.props.changeIsFetchingFromProfile(true)
        ProfileAPI.setUserProfile(userIdForURL)
            .then ( response => {
                this.props.changeIsFetchingFromProfile(false)
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
    isFetching:boolean
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profileWrapperObj: state.profileReducer,
        myLoginId:state.auth.data.id,
        isFetching:state.profileReducer.isFetching
    }
}

const ProfileWrapperContainer = connect ( mapStateToProps, {
    onPostChanger: changePostInputActionCreator,
    onAddPost: addPostActionCreator,
    setUserProfile:setUserProfileActionCreator,
    changeIsFetchingFromProfile:changeIsFetchingFromProfileActionCreator
} ) ( WithURLProfileWrapperApiContainer );

export default ProfileWrapperContainer;
