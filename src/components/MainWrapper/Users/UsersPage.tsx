import React from "react";
import style from './UserPage.module.css'
import {UserType} from "../../../Redux/usersReducer";
import User from "./User/User";
import Paginator from "../../common/Paginator/Paginator";


type UsersPagePropsType = {
    emptyPhoto: string
    users: UserType[]
    totalCount: number
    pageSize: number
    portionNumber: number
    currentPage: number
    isRequestSendUsersId: number []
    followCallBack: (id: number) => void
    unFollowCallBack: (id: number) => void
    onPageChanged: (pageNumber: number) => void
    changePortionNumber: (portion: number) => void

}

const Users: React.FC<UsersPagePropsType> = React.memo ( (props) => {

    const {
        users,
        totalCount,
        pageSize,
        followCallBack,
        unFollowCallBack,
        onPageChanged,
        emptyPhoto,
        isRequestSendUsersId,
        currentPage,
        portionNumber,
        changePortionNumber
    } = props;


    const mappedUsers = users.map ( user => {
        return <User user={ user }
                     emptyPhoto={ emptyPhoto }
                     isRequestSendUsersId={ isRequestSendUsersId }
                     followCallBack={ followCallBack }
                     unFollowCallBack={ unFollowCallBack }/>
    } ) //users items mapped for page


    return (<div className={ style.usersFrame }>
            <Paginator changePortionNumber={ changePortionNumber } portionNumber={ portionNumber }
                       totalCount={ totalCount } currentPage={ currentPage } onPageChanged={ onPageChanged }/>
            { mappedUsers }
        </div>
    );
} )
export default Users;




