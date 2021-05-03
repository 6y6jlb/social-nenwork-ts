import React from "react";
import style from './UserPage.module.css'
import {UserType} from "../../../Redux/usersReducer";
import {NavLink} from "react-router-dom";


type UsersPagePropsType = {
    emptyPhoto: string
    users: UserType[]
    totalCount: number,
    pageSize: number
    currentPage: number,
    isRequestSendUsersId:number []
    followCallBack: (id: number) => void
    unFollowCallBack: (id: number) => void
    onPageChanged: (pageNumber: number) => void

}

const Users: React.FC<UsersPagePropsType> = (props) => {

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
        return (
            <div className={ style.user } key={ user.id }>
                <div className={ style.photoZone }>
                    <NavLink  to={ `/profile/${ user.id }` }><img src={ user.photos.small || emptyPhoto }
                                                                 alt={ `${ user.name }, ${ user.id }` }/></NavLink>
                    { user.followed
                        ? <button disabled={isRequestSendUsersId.some(id=>id===user.id)} className={ style.followed } onClick={() => {
                            followCallBack(user.id)
                            /*
                            props.sendRequestFromFollowUnFollow(user.id,true)
                            UsersAPI.unFollowUser(user.id)
                                .then ( response => {
                                    if (response.data.resultCode === 0) {
                                        followCallBack ( user.id )
                                        props.sendRequestFromFollowUnFollow(user.id,false)
                                    }
                                } )
                        */} }
                                >друх</button>
                        : <button disabled={isRequestSendUsersId.some(id=>id===user.id)} className={ style.followed }
                                onClick={ () => {
                                    unFollowCallBack(user.id)
                                    /*
                                    props.sendRequestFromFollowUnFollow(user.id,true)
                                    UsersAPI.followUser(user.id)
                                        .then ( response => {
                                            if (response.data.resultCode === 0) {
                                                unFollowCallBack ( user.id )
                                                props.sendRequestFromFollowUnFollow(user.id,false)
                                            }
                                        } )
                                */} }>не друх</button> }
                </div>
                <div className={ style.description }>
                    <div className={ style.info }>
                        <div className={ style.userStatus }>{ user.status || 'Человечный человек' }</div>
                        <div className={ style.name }>{ user.name }</div>
                    </div>
                    <div className={ style.location }>
                        <span className={ style.country }>"user.location.country"</span>
                        <span className={ style.city }>"user.location.city"</span></div>
                </div>
            </div>
        )
    } ) //users items mapped for page

    const mappedPages = pages.map ( (p,i) => <span key={i} onClick={ () => onPageChanged ( p ) }
                                               className={currentPage === p ? style.activeNumber : style.normalNumber }>{ p }</span>
    )

    return (<div className={ style.usersFrame }>
                <div className={ style.pages }>{ mappedPages }</div>
                { mappedUsers }
            </div>
    );
}
export default Users;