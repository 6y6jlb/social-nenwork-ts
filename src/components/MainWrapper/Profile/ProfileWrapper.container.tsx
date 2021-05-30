import React from "react";
import {
    actionsProfile,
    getProfileTC,
    InitialStateProfileType
} from "../../../Redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileWrapper} from "./ProfileWrapper";
import Preloader from "../../common/preloader/Preloader";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";


//apiContainer
class ProfileWrapperAPIContainer extends React.PureComponent<PropsType> {

    componentDidMount() {
        let userIdForURL = this.props.match.params.userId
        if (!userIdForURL) {
            userIdForURL = this.props.myLoginId //my autorzed id
        } else {
            //userIdForURL = this.props.myLoginId //my autorzed id
            userIdForURL = this.props.history.push('/login') //my autorzed id
        }
        this.props.getProfileTC ( userIdForURL )
    }//axios request with fetching and setProfile

    render() {
        return (
            this.props.isFetching ? <Preloader/> :
                <ProfileWrapper profileWrapperObj={ this.props.profileWrapperObj }
                                onAddPost={ this.props.onAddPost }/>
        )
    }
}

//connect
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profileWrapperObj: state.profileReducer,
        myLoginId: state.auth.data.id,
        isFetching: state.profileReducer.isFetching,
        isAuth: state.auth.isAuth
    }
}
export default compose<React.ComponentType> (
    connect ( mapStateToProps, {
        onAddPost: actionsProfile.addPost,
        getProfileTC
    } ),
    withRouter,
    withAuthRedirect
) ( ProfileWrapperAPIContainer )

//type
type ProfileWrapperAPIContainerPropsType = {
    onAddPost: (value:string) => void
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
type mapStateToPropsType = {
    profileWrapperObj: InitialStateProfileType
    myLoginId: number | null
    isFetching: boolean
    isAuth: boolean
}
