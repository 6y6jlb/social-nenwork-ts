import React from "react";
import {
    addPostActionCreator,
    changePostInputActionCreator,
    getProfileTC,
    InitialStateProfileType
} from "../../../Redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileWrapper} from "./ProfileWrapper";
import Preloader from "../../common/preloader/Preloader";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";


type ProfileWrapperAPIContainerPropsType = {
    onAddPost: () => void
    onPostChanger: (text: string) => void
    profileWrapperObj: InitialStateProfileType
    myLoginId: number | null
    isFetching: boolean
    getProfileTC: (userIdForURL: number | any) => void
    isAuth: boolean
}

type WithRouterProfileType = {
    userId: number | any
}
type PropsType = RouteComponentProps<WithRouterProfileType> & ProfileWrapperAPIContainerPropsType

class ProfileWrapperAPIContainer extends React.Component<PropsType> {


    componentDidMount() {


        let userIdForURL = this.props.match.params.userId
        if (!userIdForURL && !this.props.isAuth) {
            userIdForURL = this.props.myLoginId //my autorzed id
        } else if (!userIdForURL) {
            userIdForURL = this.props.myLoginId //my autorzed id
        }
        this.props.getProfileTC ( userIdForURL )
        /*this.props.changeIsFetchingFromProfile(true)
        ProfileAPI.setUserProfile(userIdForURL)
            .then ( response => {
              this.props.changeIsFetchingFromProfile(false)
                    this.props.setUserProfile ( response.data )
                }
            )*/
    }//axios request with fetching and setProfile



    render() {
        return (
             this.props.isFetching ? <Preloader/> :
                <ProfileWrapper profileWrapperObj={ this.props.profileWrapperObj }
                                onAddPost={ this.props.onAddPost }
                                onPostChanger={ this.props.onPostChanger }/>
        )
        // return (
        //     this.props.isFetching
        //         ?<Preloader/>
        //         :this.props.isAuth?<ProfileWrapper profileWrapperObj={this.props.profileWrapperObj}
        //                          onAddPost={this.props.onAddPost}
        //                          onPostChanger={this.props.onPostChanger}/>
        //         :<Redirect to={'/login'}/>
        // );
    }
}



type mapStateToPropsType = {
    profileWrapperObj: InitialStateProfileType
    myLoginId: number | null
    isFetching: boolean
    isAuth: boolean
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profileWrapperObj: state.profileReducer,
        myLoginId: state.auth.data.id,
        isFetching: state.profileReducer.isFetching,
        isAuth: state.auth.isAuth
    }
}

const ProfileWrapperContainer = connect ( mapStateToProps, {
    onPostChanger: changePostInputActionCreator,
    onAddPost: addPostActionCreator,
    getProfileTC
} ) ( withRouter ( withAuthRedirect(ProfileWrapperAPIContainer) ) );

export default ProfileWrapperContainer;
