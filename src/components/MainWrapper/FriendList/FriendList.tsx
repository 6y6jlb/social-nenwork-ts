import React from "react";
import {UserType} from "../../../Redux/usersReducer";
import style from './FriendList.module.css'

export type FriendListPropsType = {
    users: UserType[]
    followCallBack: (id: number) => void
    unFollowCallBack: (id: number) => void
}


function FriendList(props: FriendListPropsType) {
    const unFollowCallBack = (id: number) => {
        props.unFollowCallBack(id)
    }
    const followCallBack = (id: number) => {
        props.followCallBack(id)
    }
    const mappedUsers = props.users.map(user => {
        return (
            <div className={style.user} key={user.id}>
                <div className={style.photoZone}>
                    <img src={user.photoImgUrl} alt={"еблет"}/>
                    {user.followed
                        ? <span className={style.followed} onClick={() => unFollowCallBack(user.id)}>друх</span>
                        : <span className={style.followed} onClick={() => followCallBack(user.id)}>не друх</span>}
                </div>
                <div className={style.description}>
                    <div className={style.userStatus}>{user.status}</div>
                    <div className={style.location}>
                        <span className={style.country}>{user.location.country}</span>
                        <span className={style.city}>{user.location.city}</span></div>
                </div>
            </div>
        )
    })

    return (
        <div className={style.usersFrame}>
            {mappedUsers}
        </div>
    )
}

export default FriendList;