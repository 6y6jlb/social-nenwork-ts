import React from "react";
import {UserType} from "../../../Redux/usersReducer";
import style from './FriendList.module.css'

export type FriendListPropsType = {
    users: UserType[]
    followCallBack:(id:number)=>void
    unFollowCallBack:(id:number)=>void
}

function FriendList(props:FriendListPropsType) {
    const mappedUsers = props.users.map(user=>{
        return (
            <div className={style.user}>
                <div className={style.photoZone}>
                    <img src={user.photoImgUrl} alt="еблет"/>
                    <span>{user.followed?'друх':'не друх'}</span>
                </div>
                <div className={style.description}>
                    <div>{user.status}</div>
                    <div><span>{user.location.country}</span><span>{user.location.city}</span></div>
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