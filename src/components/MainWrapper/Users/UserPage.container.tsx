import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {
    actionsUsers,
    followUserTC,
    getUsersTC,
    InitialStateUsersType,
    unFollowUserTC,
    UserType
} from "../../../Redux/usersReducer";
import Users from "./UsersPage";
import emptyPhoto from '../../../images/emptyUser.png'
import Preloader from "../../common/preloader/Preloader";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";

type UsersPageAPIComponentPropsType = {
    users: UserType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    isRequestSendUsersId: number[]
    followCallBack: (id: number) => void
    unFollowCallBack: (id: number) => void
    changeCurrentPage: (currentPage: number) => void
    getUsers: (pageSize: number, currentPage: number) => void
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
    currentPage: number,
    isFetching: boolean,
    isRequestSendUsersId: number[]
}

class UserPageAPIComponent extends React.Component<UsersPageAPIComponentPropsType> {

    componentDidMount() {
        this.props.getUsers ( this.props.pageSize, this.props.currentPage )
    }//axios request with fetching and setUsers

    componentWillUnmount() {
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage ( pageNumber )
        this.props.getUsers ( this.props.pageSize, pageNumber )

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
            /> }</>
    }
} //class container for USERS

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        users: state.usersReducer.users,
        totalCount: state.usersReducer.totalCount,
        pageSize: state.usersReducer.pageSize,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        isRequestSendUsersId: state.usersReducer.isRequestSendUsersId

    }
}

export default compose<React.ComponentType> (
    connect ( mapStateToProps, {
        followCallBack: followUserTC,
        unFollowCallBack: unFollowUserTC,
        changeCurrentPage: actionsUsers.changeCurrentPageActionCreator,
        getUsers: getUsersTC
    } ),
    withAuthRedirect
)(UserPageAPIComponent)