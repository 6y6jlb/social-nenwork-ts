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
    unFollowActionCreator,
    UserType
} from "../../../Redux/usersReducer";
import axios from "axios";
import Users from "./UsersPage";
import emptyPhoto from '../../../images/emptyUser.png'

type UsersPageAPIComponentPropsType = {
    users: UserType[]
    totalCount: number,
    pageSize: number
    currentPage: number,
    isFetching: boolean
    followCallBack: (id: number) => void
    unFollowCallBack: (id: number) => void
    setUsers: (users: UserType[]) => void
    changeCurrentPage: (currentPage: number) => void
    changeTotalCount: (currentPage: number) => void
    changeIsFetching: (isFetching: boolean) => void
}
export type UserResponseType = {
    id: number
    name: string
    status: string
    photos: { small: string | null, large: string | null }
    followed: boolean
}
type UsersResponseType = {
    items: Array<UserResponseType>
    totalCount: number
    error: string
}
type MapStateToPropsType = {
    users: InitialStateUsersType
    totalCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean
}
/*type MapDispatchToPropsType = {
    followCallBack: (id: number) => void
    unFollowCallBack: (id: number) => void
    setUsers: (users: UserType[]) => void
    changeCurrentPage: (currentPage: number) => void
    changeTotalCount: (currentPage: number) => void
    changeIsFetching: (isFetching: boolean) => void
}*/


class UserPageAPIComponent extends React.Component<UsersPageAPIComponentPropsType> {

    componentDidMount() {
        this.props.changeIsFetching ( true )
        axios.get<UsersResponseType> ( `https://social-network.samuraijs.com/api/1.0/users/?count=${ this.props.pageSize }&page=${ this.props.currentPage }` )
            .then ( response => {
                    this.props.changeIsFetching ( false )
                    this.props.changeTotalCount ( response.data.totalCount > 20 ? 20 : response.data.totalCount )
                    this.props.setUsers ( response.data.items )
                }
            )
    }//axios request with fetching and setUsers

    componentWillUnmount() {
        this.props.setUsers ( [] )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeIsFetching ( true )
        this.props.changeCurrentPage ( pageNumber )
        axios.get<UsersResponseType> ( `https://social-network.samuraijs.com/api/1.0/users/?count=${ this.props.pageSize }&page=${ this.props.currentPage }` )
            .then ( response => {

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
                      currentPage={ this.props.currentPage } pageSize={ this.props.pageSize }/>
    }
} //class container for USERS

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        users: state.usersReducer.users,
        totalCount: state.usersReducer.totalCount,
        pageSize: state.usersReducer.pageSize,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching
    }
}

//const UserPageContainer = connect ( mapStateToProps, mapDispatchToProps ) ( UserPageAPIComponent )
const UserPageContainer = connect ( mapStateToProps, {
    followCallBack: followActionCreator,
    unFollowCallBack: unFollowActionCreator,
    setUsers: addMoreUsersActionCreator,
    changeCurrentPage: changeCurrentPageActionCreator,
    changeTotalCount: changeTotalCountActionCreator,
    changeIsFetching: changeIsFetchingActionCreator
} ) ( UserPageAPIComponent ) //without mapDispatch

export default UserPageContainer;