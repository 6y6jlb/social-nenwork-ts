import React from "react";
import {actionsProfile, InitialStateProfileType, UserFromProfileResponseType} from "../../../Redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileWrapper} from "./ProfileWrapper";
import Preloader from "../../common/preloader/Preloader";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";
import selectors from "../../../utils/selectors";


//apiContainer
class ProfileWrapperAPIContainer extends React.PureComponent<PropsType> {


    refreshProfile() {
        let userIdForURL = this.props.match.params.userId
        if (!userIdForURL) {
            userIdForURL = this.props.myLoginId //my autorzed id
            if (!userIdForURL) {
                userIdForURL = this.props.history.push ( '/login' ) //my autorzed id
            }
        }
        this.props.getProfile ( userIdForURL )
        this.props.getStatus ( userIdForURL )
    }

    componentDidMount() {
        this.refreshProfile ()
    }//axios request with fetching and setProfile

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile ()
        }
    }

    render() {
        return (
            this.props.isFetching ? <Preloader/> :
                <ProfileWrapper profileWrapperObj={ this.props.profileWrapperObj }
                                onAddPost={ this.props.onAddPost }
                                openSet={ this.props.openSet }
                                isOwner={ !this.props.match.params.userId }
                                savePhoto={ this.props.savePhoto }
                                isOpenMenu={this.props.isOpenMenu}
                                saveNewProfile={ this.props.saveNewProfile }/>
        )
    }
}

//withHooks
// const ProfileWrapperAPIContainerWithHooks:React.FC = (props)=>{
//     return (
//
//     )
// }


//connect
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profileWrapperObj: selectors.profileSelectors.getProfileWrapperObj(state),
        myLoginId: selectors.authSelectors.getMyLoginId(state),
        isFetching: selectors.profileSelectors.getIsFetchingProfile(state),
        isAuth: selectors.authSelectors.getIsAuth(state),
        isOpenMenu: selectors.profileSelectors.getIsOpenMenuProfile(state)
    }
}
export default compose<React.ComponentType> (
    connect ( mapStateToProps, {
        onAddPost: actionsProfile.addPost,
        getProfile:actionsProfile.getProfileSaga,
        getStatus:actionsProfile.getStatusProfileSaga,
        savePhoto:actionsProfile.savePhotoProfileSaga,
        saveNewProfile:actionsProfile.saveNewProfileSaga,
        openSet:actionsProfile.openSet
    } ),
    withRouter,
    withAuthRedirect
) ( ProfileWrapperAPIContainer )

//type
type ProfileWrapperAPIContainerPropsType = {
    onAddPost: (value: string) => void
    profileWrapperObj: InitialStateProfileType
    myLoginId: number | null
    isFetching: boolean
    isOpenMenu:boolean
    getProfile: (userIdForURL: number | any) => void
    getStatus: (userId: number | any) => void
    openSet: (isOpenMenu:boolean) => void
    savePhoto: (file: any) => void
    saveNewProfile: (model: UserFromProfileResponseType,userId:number|null) => void
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
    isOpenMenu: boolean
    isAuth: boolean
}
