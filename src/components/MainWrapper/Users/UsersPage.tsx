import React, {useEffect, useState} from "react";
import style from './UserPage.module.css';
import {actionsUsers, UserType} from "../../../Redux/usersReducer";
import User from "./User/User";
import Paginator from "../../common/Paginator/Paginator";
import {useDispatch} from "react-redux";
import SearchArea from "../NewsFeed/SearchArea/SearchArea";


type UsersPagePropsType = {
    emptyPhoto: string
    users: UserType[]
    totalCount: number
    pageSize: number
    portionNumber: number
    currentPage: number
    isRequestSendUsersId: number []
    onPageChanged: (pageNumber: number) => void

}

const Users: React.FC<UsersPagePropsType> = React.memo ( (props) => {

    const {
        users,
        totalCount,
        pageSize,
        onPageChanged,
        emptyPhoto,
        isRequestSendUsersId,
        currentPage,
        portionNumber,
    } = props;

    const [searchText, setSearchText] = useState('')
    const dispatch = useDispatch ();
    const setPortionNumber = (portionNumber: number) => {
        dispatch ( actionsUsers.setPortionNumber ( portionNumber ) );
    };


    useEffect ( () => {
        dispatch ( actionsUsers.getUsersSaga ( pageSize, currentPage ,searchText) );
    }, [searchText,currentPage,searchText] );


    const onSearchArea = (text: string) => {
        setSearchText(text)
    }


    const mappedUsers = users.map ( user => {
        return <User user={ user }
                     emptyPhoto={ emptyPhoto }
                     isRequestSendUsersId={ isRequestSendUsersId }
        />;
    } );


    return (<div className={ style.usersFrame }>
           <SearchArea onSearchArea={onSearchArea}/>
            <Paginator changePortionNumber={ setPortionNumber } portionNumber={ portionNumber }
                       totalCount={ totalCount } currentPage={ currentPage } onPageChanged={ onPageChanged }/>
            { mappedUsers }
        </div>
    );
} );
export default Users;




