import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actionsUsers, UserType} from "../../../Redux/usersReducer";
import Users from "./UsersPage";
import emptyPhoto from '../../../images/emptyUser.png';
import Preloader from "../../common/preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {commonUsersSelector} from "../../../utils/selectors/users-selectors";


type PropsType = {
    users: UserType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    portionNumber: number
    isRequestSendUsersId: number[]
    followCallBack: (id: number) => void
    followUnfollowCallBack: (id: number) => void
    unFollowCallBack: (id: number) => void
    toDialog: (id: number) => void
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


const UsersPageContainer: React.FC<PropsType> = (props) => {

    const dispatch = useDispatch ();
    const {
        users,
        totalCount,
        pageSize,
        currentPage,
        isRequestSendUsersId,
        portionNumber,
        isFetching,
    } = useSelector ( commonUsersSelector );



    const onPageChanged = (pageNumber: number) => {
        dispatch ( actionsUsers.changeCurrentPageActionCreator ( pageNumber ) );
        dispatch ( actionsUsers.getUsersSaga ( pageSize, pageNumber ) );

    };


    return <>{ isFetching
        ? <Preloader/>
        : <Users emptyPhoto={ emptyPhoto }
                 users={ users }
                 totalCount={ totalCount }
                 onPageChanged={ onPageChanged }
                 currentPage={ currentPage }
                 pageSize={ pageSize }
                 isRequestSendUsersId={ isRequestSendUsersId }
                 portionNumber={ portionNumber }
        /> }</>;

};


export default compose<React.ComponentType> ( withAuthRedirect ) ( UsersPageContainer );