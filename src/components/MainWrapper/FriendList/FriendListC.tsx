import React from "react";
import {UserType} from "../../../Redux/usersReducer";
import style from './FriendList.module.css'
import axios from "axios";

type FriendListPropsType = {
    users: UserType[]
    followCallBack: (id: number) => void
    unFollowCallBack: (id: number) => void
    setUsers: (users:UserType[])=>void
}

export type UserResponseType = {
    id:number
    name:string
    status:string
    photos:{small:string|null,large:string|null}
    followed:boolean
}

type UsersResponseType = {
    items:Array<UserResponseType>
    totalCount:number
    error:string


}

 class FriendListC extends React.Component<FriendListPropsType, any> {
    constructor(props:FriendListPropsType) {
        super(props);
    }
    componentDidMount() {
        axios.get<UsersResponseType>('https://social-network.samuraijs.com/api/1.0/users/').then(response=> {
            this.props.setUsers(response.data.items)
            }

        )
    }

     followCallBack = (id: number) => {

         this.props.followCallBack(id)
     }
     unFollowCallBack = (id: number) => {
         this.props.unFollowCallBack(id)
     }
     mappedUsers = this.props.users.map(user => {
         return (
             <div className={style.user} key={user.id}>
                 <div className={style.photoZone}>
                     <img src={user.photos.small||''} alt={"еблет"}/>
                     {user.followed
                         ? <span className={style.followed} onClick={() => this.unFollowCallBack(user.id)}>друх</span>
                         : <span className={style.followed} onClick={() => this.followCallBack(user.id)}>не друх</span>}
                 </div>
                 <div className={style.description}>
                     <div className={style.userStatus}>{user.status}</div>
                     <div className={style.location}>
                         <span className={style.country}>"user.location.country"</span>
                         <span className={style.city}>"user.location.city"</span></div>
                 </div>
             </div>
         )
     })

     render() {
         return (
             <div className={style.usersFrame}>
                 {this.mappedUsers}
             </div>
         );
     }

}

export default FriendListC;