import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {actionsUsers, InitialStateUsersType, UserType} from "../../../Redux/usersReducer";
import Users from "./UsersPage";
import emptyPhoto from '../../../images/emptyUser.png'
import Preloader from "../../common/preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import selectors from "../../../utils/selectors";
import {getUsersDifficult} from "../../../utils/selectors/users-selectors";

type UsersPageAPIComponentPropsType = {
    users: UserType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    portionNumber:number
    isRequestSendUsersId: number[]
    followCallBack: (id: number) => void
    followUnfollowCallBack: (id: number) => void
    unFollowCallBack: (id: number) => void
    changeCurrentPage: (currentPage: number) => void
    changePortionNumber: (portion: number) => void
    getUsersSaga: (pageSize: number, currentPage: number) => void
}
export type UserResponseType = {
    id: number
    name: string
    status: string
    photos: { small: string | null, large: string | null }
    followed: boolean
}
export type UsersResponseType = {
    items: Array<UserResponseType>
    totalCount: number
    error: string
}
type MapStateToPropsType = {
    users: InitialStateUsersType
    totalCount: number,
    pageSize: number,
    portionNumber: number,
    currentPage: number,
    isFetching: boolean,
    isRequestSendUsersId: number[]
}

class UserPageAPIComponent extends React.Component<UsersPageAPIComponentPropsType> {

    componentDidMount() {
        this.props.getUsersSaga ( this.props.pageSize, this.props.currentPage )
    }//axios request with fetching and setUsers

    componentWillUnmount() {
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage ( pageNumber )
        this.props.getUsersSaga ( this.props.pageSize, pageNumber )

    } //axios request with fetching and setUsers

    render() {
        return <>{ this.props.isFetching
            ? <Preloader/>
            : <Users emptyPhoto={ emptyPhoto }
                     users={ this.props.users }
                     totalCount={ this.props.totalCount }
                     followCallBack={ this.props.followCallBack }
                     unFollowCallBack={ this.props.unFollowCallBack }
                     onPageChanged={ this.onPageChanged }
                     currentPage={ this.props.currentPage }
                     pageSize={ this.props.pageSize }
                     isRequestSendUsersId={ this.props.isRequestSendUsersId }
                     changePortionNumber={this.props.changePortionNumber}
                     portionNumber={this.props.portionNumber}
            /> }</>
    }
} //class container for USERS

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        users: selectors.usersSelectors.getUsersDifficult(state),
        totalCount: selectors.usersSelectors.getTotalCount(state),
        pageSize: selectors.usersSelectors.getPageSize(state),
        portionNumber:selectors.usersSelectors.getPortionNumber(state),
        currentPage: selectors.usersSelectors.getCurrentPage(state),
        isFetching: selectors.usersSelectors.getIsFetching(state),
        isRequestSendUsersId: selectors.usersSelectors.getIsRequestSendUserId(state)

    }
}





export default compose<React.ComponentType> (
    connect ( mapStateToProps, {
        followCallBack: actionsUsers.followSaga,
        unFollowCallBack: actionsUsers.unfollowSaga,
        changeCurrentPage: actionsUsers.changeCurrentPageActionCreator,
        changePortionNumber:actionsUsers.setPortionNumber,
        getUsersSaga:actionsUsers.getUsersSaga,

    } ),
    withAuthRedirect
)(UserPageAPIComponent)