import React from "react";
import style from "./User.module.css";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../common/routes/Routes";
import {UserType} from "../../../../Redux/usersReducer";
import {FormattedMessage} from "../../../common/FormattedMessage/FormattedMessage";

type UserPropsType = {
    user:UserType
    emptyPhoto:string
    isRequestSendUsersId:number []
    followCallBack: (id: number) => void
    unFollowCallBack: (id: number) => void
}

const User:React.FC<UserPropsType> = React.memo(({user,emptyPhoto,isRequestSendUsersId,followCallBack,unFollowCallBack})=>{
    return (
        <div className={ style.user } key={ user.id }>
            <div className={ style.photoZone }>
                <NavLink  to={ `${ PATH.PROFILE + user.id }` }><img src={ user.photos.small || emptyPhoto }
                                                                    alt={ `${ user.name }, ${ user.id }` }/></NavLink>
                { user.followed
                    ? <button disabled={isRequestSendUsersId.some(id=>id===user.id)} className={ style.followed } onClick={() => {
                        unFollowCallBack(user.id)
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
                    > <FormattedMessage _id={'unfollow'}/></button>
                    : <button disabled={isRequestSendUsersId.some(id=>id===user.id)} className={ style.followed }
                              onClick={ () => {
                                  followCallBack(user.id)
                                  /*
                                  props.sendRequestFromFollowUnFollow(user.id,true)
                                  UsersAPI.followUser(user.id)
                                      .then ( response => {
                                          if (response.data.resultCode === 0) {
                                              unFollowCallBack ( user.id )
                                              props.sendRequestFromFollowUnFollow(user.id,false)
                                          }
                                      } )
                              */} }><FormattedMessage _id={'follow'}/></button> }
            </div>
            <div className={ style.description }>
                <div className={ style.info }>
                    <div className={ style.userStatus }>{ user.status ||  <FormattedMessage _id={'users.status'}/> }</div>
                    <div className={ style.name }>{ user.name }</div>
                </div>
                <div className={ style.location }>
                    <span className={ style.country }>"user.location.country"</span>
                    <span className={ style.city }>"user.location.city"</span>
                </div>
            </div>
        </div>
    )
})
export default User;