import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {
    addMoreUsersActionCreator,
    changeCurrentPageActionCreator,
    changeIsFetchingActionCreator,
    changeTotalCountActionCreator,
    followActionCreator,
    InitialStateUsersType,
    sendRequestFromFollowUnFollowActionCreator,
    unFollowActionCreator,
    UserType
} from "../../../Redux/usersReducer";
import Users from "./UsersPage";
import emptyPhoto from '../../../images/emptyUser.png'
import {UsersAPI} from "../../../api/api";

type UsersPageAPIComponentPropsType = {
    users: UserType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    isRequestSend: boolean
    followCallBack: (id: number) => void
    unFollowCallBack: (id: number) => void
    setUsers: (users: UserType[]) => void
    changeCurrentPage: (currentPage: number) => void
    changeTotalCount: (currentPage: number) => void
    changeIsFetching: (isFetching: boolean) => void
    sendRequestFromFollowUnFollow: (isRequestSend: boolean) => void
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
    isRequestSend: boolean
}

class UserPageAPIComponent extends React.Component<UsersPageAPIComponentPropsType> {

    componentDidMount() {
        this.props.changeIsFetching ( true )

        UsersAPI.getUsers ( this.props.pageSize, this.props.currentPage ).then ( response => {
            this.props.changeIsFetching ( false )
            this.props.changeTotalCount ( response.data.totalCount > 20 ? 20 : response.data.totalCount )
            this.props.setUsers ( response.data.items )
        } );
    }//axios request with fetching and setUsers

    componentWillUnmount() {
        this.props.setUsers ( [] )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeIsFetching ( true )
        this.props.changeCurrentPage ( pageNumber )
        UsersAPI.getUsers ( this.props.pageSize, this.props.currentPage ).then ( response => {
                this.props.changeTotalCount ( response.data.totalCount > 20 ? 20 : response.data.totalCount )
                this.props.setUsers ( response.data.items )
                this.props.changeIsFetching ( false )
            }
        )
    } //axios request with fetching and setUsers

    render() {
        return <Users emptyPhoto={ emptyPhoto }
                      users={ this.props.users }
                      setUsers={ this.props.setUsers }
                      totalCount={ this.props.totalCount }
                      changeTotalCount={ this.props.changeTotalCount }
                      followCallBack={ this.props.followCallBack } unFollowCallBack={ this.props.unFollowCallBack }
                      onPageChanged={ this.onPageChanged } changeCurrentPage={ this.props.changeCurrentPage }
                      isFetching={ this.props.isFetching } changeIsFetching={ this.props.changeIsFetching }
                      currentPage={ this.props.currentPage } pageSize={ this.props.pageSize }
                      isRequestSend={ this.props.isRequestSend }
                      sendRequestFromFollowUnFollow={ this.props.sendRequestFromFollowUnFollow }/>
    }
} //class container for USERS

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        users: state.usersReducer.users,
        totalCount: state.usersReducer.totalCount,
        pageSize: state.usersReducer.pageSize,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        isRequestSend: state.usersReducer.isRequestSend

    }
}

const UserPageContainer = connect ( mapStateToProps, {
    followCallBack: followActionCreator,
    unFollowCallBack: unFollowActionCreator,
    setUsers: addMoreUsersActionCreator,
    changeCurrentPage: changeCurrentPageActionCreator,
    changeTotalCount: changeTotalCountActionCreator,
    changeIsFetching: changeIsFetchingActionCreator,
    sendRequestFromFollowUnFollow: sendRequestFromFollowUnFollowActionCreator
} ) ( UserPageAPIComponent ) //without mapDispatch

export default UserPageContainer;