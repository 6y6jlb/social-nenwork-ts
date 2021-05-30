import React from "react";
import style from './UserPage.module.css'
import {UserType} from "../../../Redux/usersReducer";
import User from "./User/User";


type UsersPagePropsType = {
    emptyPhoto: string
    users: UserType[]
    totalCount: number,
    pageSize: number
    currentPage: number,
    isRequestSendUsersId: number []
    followCallBack: (id: number) => void
    unFollowCallBack: (id: number) => void
    onPageChanged: (pageNumber: number) => void

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
        currentPage
    } = props;


    const pagesCount = Math.ceil ( totalCount / pageSize ) // pages:number
    let pages: number[] = [];
    for (let i = 1; i < pagesCount + 1; i++) {
        pages = [...pages, i]
    }

    const mappedUsers = users.map ( user => {
        return <User user={ user }
                     emptyPhoto={ emptyPhoto }
                     isRequestSendUsersId={ isRequestSendUsersId }
                     followCallBack={ followCallBack }
                     unFollowCallBack={ unFollowCallBack }/>
    } ) //users items mapped for page

    const mappedPages = pages.map ( (p, i) => <span key={ i } onClick={ () => onPageChanged ( p ) }
                                                    className={ currentPage === p ? style.activeNumber : style.normalNumber }>{ p }</span>
    )

    return (<div className={ style.usersFrame }>
            <div className={ style.pages }>{ mappedPages }</div>
            { mappedUsers }
        </div>
    );
} )
export default Users;